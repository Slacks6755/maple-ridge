// Drives <BuildSequence />. One clock (t, in seconds) and every animated
// element is a pure function of it, so play, pause, and jumping to a phase
// are all just "render at time t". The static markup is the finished
// drawing; this only takes it apart and puts it back together.

type Kind = 'draw' | 'fade' | 'out' | 'grow' | 'growy' | 'push' | 'set' | 'wipe'
interface Step {
  kind: Kind
  start: number
  dur: number
}
interface Track {
  el: SVGElement
  steps: Step[]
  key: string
}

const clamp = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n)
const easeOut = (p: number) => 1 - (1 - p) ** 3
const easeInOutSine = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2

function parse(spec: string): Step[] {
  return spec.split(';').map(s => {
    const [kind, start, dur] = s.split(',')
    return { kind: kind as Kind, start: +start, dur: Math.max(+dur, 0.001) }
  })
}

function apply(el: SVGElement, kind: Kind, p: number) {
  const s = el.style
  switch (kind) {
    case 'draw':
      s.strokeDashoffset = String(1.01 * (1 - p))
      s.opacity = '1' // undo a later 'out' when seeking backwards
      break
    case 'fade':
      s.opacity = String(p)
      break
    case 'out':
      s.opacity = String(1 - p)
      break
    case 'grow':
      s.opacity = String(Math.min(1, p * 2.5))
      s.transform = `scale(${0.15 + 0.85 * p})`
      break
    case 'growy':
      s.opacity = p > 0 ? '1' : '0'
      s.transform = `scaleY(${p})`
      break
    case 'push':
      s.opacity = String(1 - p)
      s.transform = `translate(${p * 18}px, ${-p * 4}px) rotate(${p * 25}deg)`
      break
    case 'set':
      s.opacity = String(Math.min(1, p * 1.6))
      s.transform = `translateY(${-(1 - p) * 12}px)`
      break
    case 'wipe': {
      const bottom = Number(el.dataset.bottom)
      const h = Number(el.dataset.h)
      el.setAttribute('y', String(bottom - h * p))
      el.setAttribute('height', String(h * p))
      break
    }
  }
}

export function mount(root: HTMLElement) {
  const total = Number(root.dataset.total)
  const speed = Number(root.dataset.speed) || 1
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const tracks: Track[] = [...root.querySelectorAll<SVGElement>('[data-a]')].map(el => ({
    el,
    steps: parse(el.dataset.a ?? ''),
    key: '',
  }))

  const phases = [...root.querySelectorAll<HTMLElement>('[data-phase]')].map(li => ({
    li,
    start: Number(li.dataset.start),
    end: Number(li.dataset.end),
    title: li.dataset.title ?? '',
    text: li.dataset.text ?? '',
  }))
  const nowTitle = root.querySelector<HTMLElement>('[data-now-title]')
  const nowText = root.querySelector<HTMLElement>('[data-now-text]')
  const control = root.querySelector<HTMLButtonElement>('[data-control]')

  // The dozer is the one thing that isn't a simple tween: it drives across,
  // and the graded ground is revealed behind its blade.
  const dozer = root.querySelector<SVGGElement>('[data-dozer]')!
  const dz = {
    x0: Number(dozer.dataset.x0),
    x1: Number(dozer.dataset.x1),
    start: Number(dozer.dataset.start),
    dur: Number(dozer.dataset.dur),
    blade: Number(dozer.dataset.blade),
    lot0: Number(dozer.dataset.lot0),
    lot1: Number(dozer.dataset.lot1),
    ground: Number(dozer.dataset.ground),
  }
  const tread = dozer.querySelector<SVGElement>('[data-tread]')!
  const pile = dozer.querySelector<SVGElement>('[data-pile]')!
  const dust = [...dozer.querySelectorAll<SVGCircleElement>('[data-puff]')]
  const exhaust = [...dozer.querySelectorAll<SVGCircleElement>('[data-exhaust]')]
  const graded = root.querySelector<SVGRectElement>('[data-clip="graded"]')!
  const roughClip = root.querySelector<SVGRectElement>('[data-clip="rough"]')!

  function renderDozer(t: number) {
    const raw = clamp((t - dz.start) / dz.dur)
    const x = dz.x0 + (dz.x1 - dz.x0) * easeInOutSine(raw)
    const moving = raw > 0 && raw < 1
    const bob = moving ? Math.sin(t * 34) * 0.5 : 0
    dozer.setAttribute('transform', `translate(${x.toFixed(2)} ${(dz.ground + bob).toFixed(2)})`)
    tread.style.strokeDashoffset = String(-x * 0.9)

    const edge = Math.min(dz.lot1, Math.max(dz.lot0, x + dz.blade))
    graded.setAttribute('width', String(edge - dz.lot0))
    roughClip.setAttribute('x', String(edge))
    roughClip.setAttribute('width', String(dz.lot1 - edge))

    const across = clamp((x + dz.blade - dz.lot0) / (dz.lot1 - dz.lot0))
    pile.style.transform = `scale(${0.25 + 0.75 * across})`

    // Dust rolling off the back of the tracks and puffs from the stack, each
    // on its own loop, only while the machine is moving. (Dozer-local units.)
    const puff = (els: SVGCircleElement[], rate: number, ox: number, oy: number, dx: number, dy: number, r0: number, r1: number, alpha: number) =>
      els.forEach((el, i) => {
        const k = (t * rate + i / els.length) % 1
        el.setAttribute('cx', (ox + dx * k).toFixed(1))
        el.setAttribute('cy', (oy + dy * k).toFixed(1))
        el.setAttribute('r', (r0 + (r1 - r0) * k).toFixed(1))
        el.setAttribute('opacity', moving ? (alpha * Math.sin(Math.PI * k)).toFixed(2) : '0')
      })
    puff(dust, 1.7, 4, -5, -38, -14, 3, 11, 0.6)
    puff(exhaust, 1.2, 104, -74, -16, -26, 1.5, 6, 0.45)
  }

  let shown = -1
  function renderPhases(t: number) {
    // The current phase is the last one that has started (the first, before any has).
    let current = 0
    phases.forEach((ph, i) => {
      const p = clamp((t - ph.start) / (ph.end - ph.start))
      ph.li.style.setProperty('--p', p.toFixed(3))
      ph.li.dataset.state = t < ph.start ? 'todo' : t >= ph.end ? 'done' : 'active'
      if (t >= ph.start) current = i
    })
    phases.forEach((ph, i) => {
      if (i === current) ph.li.setAttribute('aria-current', 'step')
      else ph.li.removeAttribute('aria-current')
    })
    if (current !== shown && nowTitle && nowText) {
      shown = current
      nowTitle.textContent = `${String(current + 1).padStart(2, '0')}  ${phases[current].title}`
      nowText.textContent = phases[current].text
    }
  }

  function render(t: number) {
    for (const tr of tracks) {
      let step = tr.steps[0]
      for (let i = tr.steps.length - 1; i >= 0; i--) {
        if (t >= tr.steps[i].start) {
          step = tr.steps[i]
          break
        }
      }
      const raw = clamp((t - step.start) / step.dur)
      const key = step.kind + raw
      if (key === tr.key) continue // nothing changed since last frame
      tr.key = key
      apply(tr.el, step.kind, easeOut(raw))
    }
    renderDozer(t)
    renderPhases(t)
  }

  // ── playback ──────────────────────────────────────────────────────────
  let t = 0
  let playing = false
  let raf = 0
  let last = 0
  let started = false
  let autoPaused = false

  function setControl(state: 'playing' | 'paused' | 'done') {
    if (!control) return
    control.dataset.state = state
    control.setAttribute(
      'aria-label',
      state === 'playing' ? 'Pause the animation' : state === 'paused' ? 'Play the animation' : 'Replay the animation',
    )
  }

  function frame(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000) * speed
    last = now
    t = Math.min(total, t + dt)
    render(t)
    if (t >= total) {
      playing = false
      setControl('done')
      return
    }
    raf = requestAnimationFrame(frame)
  }

  function play() {
    if (t >= total) t = 0
    started = true
    autoPaused = false
    if (playing) return
    playing = true
    last = performance.now()
    raf = requestAnimationFrame(frame)
    setControl('playing')
  }

  function pause() {
    playing = false
    cancelAnimationFrame(raf)
    setControl(t >= total ? 'done' : 'paused')
  }

  // Reduced motion: no playback. The finished drawing stays up and the
  // phase list still works — it jumps straight to the end of that phase.
  if (reduce) {
    root.classList.remove('is-armed')
    control?.setAttribute('hidden', '')
    render(total)
    phases.forEach((ph, i) =>
      ph.li.querySelector('button')?.addEventListener('click', () => render(i === phases.length - 1 ? total : ph.end - 0.01)),
    )
    return
  }

  render(0)
  root.classList.add('is-ready')
  // Handy from the console when tuning: $('[data-build-sequence]').seek(5)
  Object.assign(root, { seek: (s: number) => (pause(), render((t = s))), play, pause })

  control?.addEventListener('click', () => {
    if (playing) pause()
    else play()
  })

  phases.forEach(ph =>
    ph.li.querySelector('button')?.addEventListener('click', () => {
      t = ph.start === phases[0].start ? 0 : ph.start
      render(t)
      play()
    }),
  )

  // Start when it scrolls into view; pause while it's off screen so nobody
  // misses the middle of it.
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!started || autoPaused) play()
      } else if (playing) {
        pause()
        autoPaused = true
      }
    },
    { threshold: 0.2 },
  ).observe(root.querySelector('.bs-stage svg')!)
}
