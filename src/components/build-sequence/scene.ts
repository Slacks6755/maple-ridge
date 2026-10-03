// Geometry + timeline for <BuildSequence />.
//
// Everything is drawn in a 1200-wide viewBox as a front elevation: grade at
// y=440, a lot from x=270–790, and a farmhouse on a block crawlspace
// foundation (floor at y=408). Scale is roughly 10 units to the foot.
//
// The drawing is a flat list of `parts`, painted in order. Each animated part
// carries a `data-a` string ("kind,start,duration", several joined with ";")
// that player.ts reads, so timing lives next to the shape it moves. Times are
// seconds from the start of the sequence.

export const G = 440 // finished grade
export const FLOOR = 408 // top of subfloor
export const LOT = { x0: 270, x1: 790 }

export interface Phase {
  title: string
  text: string
  start: number
  end: number
}

export const phases: Phase[] = [
  {
    title: 'Clearing the land',
    text: 'Brush and trees cleared, dirt moved, and the house spot leveled so water drains away.',
    start: 0,
    end: 2.7,
  },
  {
    title: 'Foundation',
    text: 'Corners marked off the plans, footings poured, and the block foundation laid.',
    start: 2.7,
    end: 5.1,
  },
  {
    title: 'Framing',
    text: 'The walls and roof go up. This is when it starts to look like a house.',
    start: 5.1,
    end: 7.7,
  },
  {
    title: 'Roof and siding',
    text: 'Metal roof, windows, doors, and siding. Once it’s closed in, work moves inside.',
    start: 7.7,
    end: 10.4,
  },
  {
    title: 'Move-in',
    text: 'Wiring, plumbing, drywall, cabinets, and paint. Then the final inspection and your keys.',
    start: 10.4,
    end: 12.6,
  },
]

export const TOTAL = 12.7
// Playback rate. Times above are authored at 1×; this plays them faster
// so people scrolling by catch the whole thing (~9 seconds).
export const SPEED = 1.45
const [P1, P2, F, D, E] = phases

// ── helpers ────────────────────────────────────────────────────────────────

type Step = [kind: string, start: number, dur: number]

export interface Part {
  d: string
  cls: string
  w?: number // stroke width
  a?: string // timeline
  draw?: boolean // drawn on with pathLength="1"
  gone?: boolean // not in the finished drawing
  at?: [number, number] // translate
  clip?: 'rough' | 'graded' | 'walls' | 'wipe'
  fill?: 'earth' // pattern fill
  mask?: 'under' | 'edges'
}

const r = (n: number) => Math.round(n * 10) / 10
export const a = (...steps: Step[]) =>
  steps.map(([k, s, d]) => `${k},${Math.round(s * 100) / 100},${Math.round(d * 100) / 100}`).join(';')

const rect = (x0: number, y0: number, x1: number, y1: number) => `M${r(x0)} ${r(y0)}H${r(x1)}V${r(y1)}H${r(x0)}Z`
const circle = (cx: number, cy: number, rad: number) =>
  `M${r(cx - rad)} ${r(cy)}a${rad} ${rad} 0 1 0 ${r(rad * 2)} 0a${rad} ${rad} 0 1 0 ${r(-rad * 2)} 0Z`

function dashed(x0: number, y0: number, x1: number, y1: number, dash = 4, gap = 3) {
  const len = Math.hypot(x1 - x0, y1 - y0)
  const ux = (x1 - x0) / len
  const uy = (y1 - y0) / len
  let d = ''
  for (let s = 0; s < len; s += dash + gap) {
    const e = Math.min(len, s + dash)
    d += `M${r(x0 + ux * s)} ${r(y0 + uy * s)}L${r(x0 + ux * e)} ${r(y0 + uy * e)}`
  }
  return d
}

// Small deterministic PRNG so the build output is stable between deploys.
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

function sampled(fn: (x: number) => number, x0: number, x1: number, step: number) {
  let d = ''
  for (let x = x0; x <= x1 + 0.01; x += step) d += `${d ? 'L' : 'M'}${r(x)} ${r(fn(x))}`
  return d
}

// A lobed, cloud-edged shape: shrubs sit on the ground (arc 180°→0°), tree
// canopies are closed all the way round.
function lobed(cx: number, cy: number, rad: number, lobes: number, full = false) {
  const span = full ? Math.PI * 2 : Math.PI
  const at = (ang: number, k: number) => [cx + Math.cos(ang) * rad * k, cy - Math.sin(ang) * rad * k * 0.9]
  let [sx, sy] = at(Math.PI, 1)
  let d = `M${r(sx)} ${r(sy)}`
  for (let i = 0; i < lobes; i++) {
    const a0 = Math.PI - (i / lobes) * span
    const a1 = Math.PI - ((i + 1) / lobes) * span
    const c = at((a0 + a1) / 2, 1.3)
    const p = at(a1, 1)
    d += `Q${r(c[0])} ${r(c[1])} ${r(p[0])} ${r(p[1])}`
  }
  return d + 'Z'
}

function tufts(x0: number, x1: number, seed: number) {
  const rand = rng(seed)
  let d = ''
  for (let x = x0 + rand() * 8; x < x1; x += 6 + rand() * 14) {
    const h = 3 + rand() * 4
    d += `M${r(x)} ${G}l${r(-1.5 - rand())} ${r(-h)}M${r(x + 1.5)} ${G}l${r(0.8 + rand())} ${r(-h - 1.5)}`
  }
  return d
}

// ── terrain ────────────────────────────────────────────────────────────────

const farRidge = (x: number) => 300 - 22 * Math.sin(x / 230 + 0.6) - 6 * Math.sin(x / 97 + 2)
const nearRidge = (x: number) => 376 - 12 * Math.sin(x / 260 + 3.2) - 4 * Math.sin(x / 120 + 1)
// Uneven ground on the raw lot; zero at both lot edges so it meets grade.
const rough = (x: number) => {
  const u = (x - LOT.x0) / (LOT.x1 - LOT.x0)
  const hill = 30 * Math.exp(-(((u - 0.42) / 0.21) ** 2)) - 4 * Math.exp(-(((u - 0.8) / 0.08) ** 2))
  return G - Math.sin(Math.PI * u) * (hill + 3.5 * Math.sin(u * 15.5) + 2 * Math.sin(u * 37 + 1))
}

const fencePosts = [14, 62, 110, 158, 206]
const fence = {
  posts: fencePosts.map((x, i) => `M${x} ${G + 1}L${x + (i % 2 ? 0.8 : -0.6)} 413`).join(''),
  wires: [418, 428]
    .map(y => fencePosts.slice(1).reduce((d, x, i) => `${d}Q${(fencePosts[i] + x) / 2} ${y + 2.5} ${x} ${y}`, `M${fencePosts[0]} ${y}`))
    .join(''),
}

// ── the dozer ──────────────────────────────────────────────────────────────

// x is the dozer's origin (back of the tracks); `blade` is how far ahead the
// cutting edge sits, after the 1.1× scale in the markup.
export const DOZER = { x0: 88, x1: 1230, start: 0.1, dur: 3.6, blade: 182, scale: 1.1 }

// Same easing player.ts uses for the dozer, inverted to find when the blade
// reaches a given x — so brush disappears exactly as the blade hits it.
function bladeArrival(x: number) {
  const e = (x - DOZER.blade - DOZER.x0) / (DOZER.x1 - DOZER.x0)
  const p = Math.acos(1 - 2 * Math.min(1, Math.max(0, e))) / Math.PI
  return DOZER.start + DOZER.dur * p
}

const BRUSH: Record<string, string> = {
  shrub: 'M-9 0C-9 -9 -4 -12 0 -11C5 -13 10 -8 10 0M-3 -4l-2 -4M3 -5l2 -3',
  sapling:
    'M0 0L0.5 -22M0.5 -14L-5 -20M0.3 -10L5 -15M-8 -26C-9 -35 5 -39 8 -29C10 -23 2 -20 -2 -22C-6 -20 -9 -23 -8 -26Z',
  tuft: 'M-4 0l-2 -8M-1 0l0 -11M2 0l2 -9M5 0l4 -6',
  stump: 'M-8 0L-7 -10H7L8 0M-7 -10C-7 -13 7 -13 7 -10M-3 -11.5C-3 -10 3 -10 3 -11.5M-8 0l-4 2M8 0l5 1.5',
  rock: 'M-9 0C-9 -6 -4 -9 1 -8C6 -8 9 -4 9 0',
}

const brush: Part[] = [
  [290, 'shrub'], [312, 'tuft'], [338, 'sapling'], [364, 'rock'], [388, 'shrub'], [418, 'tuft'],
  [446, 'sapling'], [472, 'shrub'], [503, 'stump'], [536, 'tuft'], [560, 'sapling'], [590, 'shrub'],
  [618, 'rock'], [646, 'tuft'], [672, 'sapling'], [700, 'shrub'], [728, 'tuft'], [756, 'sapling'],
].map(([x, kind], i) => {
  const t = bladeArrival(x as number)
  return {
    d: BRUSH[kind],
    cls: 'ink-3',
    w: 0.9,
    at: [x as number, r(rough(x as number))],
    gone: true,
    a: a(['push', t - 0.04, 0.32]),
  }
})

// ── house geometry ─────────────────────────────────────────────────────────

const X0 = 332 // foundation ends
const X1 = 752
const STEM = 418 // top of block
const WING = { x0: 348, x1: 480, plate: 314 }
const MAIN = { x0: 480, x1: 732, plate: 280, ridgeX: 606, peak: 167 }
// Underside of the main gable's rake (the top of the gable wall).
const rake = (x: number) => MAIN.peak + Math.abs(x - MAIN.ridgeX) * 0.8846

interface Opening {
  x0: number
  x1: number
  y0: number
  y1: number
  plate: number
  door?: boolean
}
const openings: Opening[] = [
  { x0: 358, x1: 396, y0: 342, y1: 386, plate: WING.plate },
  { x0: 426, x1: 456, y0: 338, y1: FLOOR, plate: WING.plate, door: true },
  { x0: 508, x1: 552, y0: 308, y1: 386, plate: MAIN.plate },
  { x0: 584, x1: 628, y0: 308, y1: 386, plate: MAIN.plate },
  { x0: 660, x1: 704, y0: 308, y1: 386, plate: MAIN.plate },
]
const attic = { x0: 594, x1: 618, y0: 206, y1: 230 }
const door = openings[1]
const windows = openings.filter(o => !o.door)
const POSTS = [338, 406, 472]

// Wall outline (wing box + main gable): used for clipping, fills, and the outline.
export const walls = `M${WING.x0} ${FLOOR}V${WING.plate}H${MAIN.x0}V${r(rake(MAIN.x0))}L${MAIN.ridgeX} ${MAIN.peak}L${MAIN.x1} ${r(rake(MAIN.x1))}V${FLOOR}Z`
export const SIDING = { top: MAIN.peak, bottom: FLOOR, wipe: a(['wipe', D.start + 1.0, 0.7]) }
export const DIM = { x: (X0 + X1) / 2, y: 478, label: '42′–0″', a: a(['fade', P2.start + 1.0, 0.4], ['out', F.start + 0.2, 0.4]) }

// ── parts, in paint order ──────────────────────────────────────────────────

const parts: Part[] = []
const add = (p: Part) => parts.push(p)
const draw = (cls: string, d: string, w: number, ...steps: Step[]) => add({ cls, d, w, draw: true, a: a(...steps) })
const show = (cls: string, d: string, w: number | undefined, ...steps: Step[]) => add({ cls, d, w, a: a(...steps) })

// The land: on screen from the first frame (no animation), so anyone
// scrolling past sees the raw lot and the parked dozer straight away.
// Hills and ground fade out at the left and right edges.
const still = (p: Part) => add(p)
still({ cls: 'faint', d: sampled(farRidge, 0, 1200, 10), w: 1, mask: 'edges' })
still({ cls: 'ink-3', d: sampled(nearRidge, 0, 1200, 10), w: 1.1, mask: 'edges' })

// Power pole and the line coming in from the road.
still({ cls: 'ink-2', d: 'M228 441V244', w: 2.2 })
still({ cls: 'ink-2', d: 'M210 252H246M220 252L228 261L236 252M213 252V248M243 252V248', w: 1.3 })
still({ cls: 'ink-3', d: 'M213 248Q110 262 0 252M243 248Q120 272 0 260', w: 0.7, mask: 'edges' })

still({ cls: 'ink-2', d: fence.posts, w: 1.3 })
still({ cls: 'ink-3', d: fence.wires, w: 0.7 })

still({ cls: '', d: rect(0, G + 1, 1200, G + 29), fill: 'earth', mask: 'under' })
still({ cls: 'ink', d: `M0 443C80 437 170 445 ${LOT.x0} ${G}`, w: 1.6, mask: 'edges' })
still({ cls: 'ink', d: `M${LOT.x1} ${G}C880 437 1010 445 1200 ${G}`, w: 1.6, mask: 'edges' })
still({ cls: 'sage-3', d: tufts(0, LOT.x0 - 6, 3) + tufts(LOT.x1 + 6, 1200, 11), w: 0.8, mask: 'edges' })
still({ cls: 'ink', d: sampled(rough, LOT.x0, LOT.x1, 5), w: 1.6, clip: 'rough' })
add({ cls: 'ink', d: `M${LOT.x0} ${G}H${LOT.x1}`, w: 1.6, clip: 'graded', a: a(['fade', DOZER.start, 0.01]) })
brush.forEach(add)

// ── 02 foundation ──
// Stakes at the corners and a string line between them; gone once framing starts.
for (const [i, x] of [X0, X1].entries()) {
  add({
    cls: 'ink-2',
    d: `M${x} ${G}V414M${x} 414l${i ? -8 : 8} 3l${i ? 8 : -8} 3`,
    w: 1.2,
    gone: true,
    a: a(['grow', P2.start + i * 0.15, 0.3], ['out', F.start + 0.1, 0.3]),
  })
}
add({
  cls: 'sage',
  d: `M${X0} 416H${X1}`,
  w: 0.8,
  draw: true,
  gone: true,
  a: a(['draw', P2.start + 0.3, 0.5], ['out', F.start + 0.1, 0.3]),
})
// Footing below grade, dashed the way hidden work is drawn.
// Footing (dashed, the way buried work is drawn) and the overall dimension:
// shown while the foundation goes in, cleared away once framing starts.
const guide = (cls: string, d: string, w: number, start: number, dur: number) =>
  add({ cls, d, w, draw: true, gone: true, a: a(['draw', start, dur], ['out', F.start + 0.2, 0.4]) })
guide(
  'ink-3',
  dashed(324, 450, X1 + 8, 450) + dashed(X1 + 8, 450, X1 + 8, 462) + dashed(X1 + 8, 462, 324, 462) + dashed(324, 462, 324, 450) +
    dashed(X0, G, X0, 450) + dashed(X1, G, X1, 450),
  0.9,
  P2.start + 0.6,
  0.5,
)
guide('ink-3', `M${X0} 467V490M${X1} 467V490M${X0} 484H${X1}`, 0.8, P2.start + 0.8, 0.6)
guide('ink-2', `M${X0 - 4} 488L${X0 + 4} 480M${X1 - 4} 488L${X1 + 4} 480`, 1, P2.start + 1.3, 0.2)
// Three courses of block above grade, laid left to right in running bond.
for (let k = 0; k < 3; k++) {
  const yb = G - (k * 22) / 3
  const yt = G - ((k + 1) * 22) / 3
  const joints = [X0]
  for (let x = X0 + (k % 2 ? 7.33 : 14.67); x < X1 - 3; x += 14.67) joints.push(x)
  joints.push(X1)
  let d = ''
  joints.forEach((x, i) => {
    d += `M${r(x)} ${r(yb)}V${r(yt)}`
    if (i < joints.length - 1) d += `H${r(joints[i + 1])}`
  })
  const s = P2.start + 1.1 + k * 0.3
  show('block', rect(X0, yt, X1, yb), undefined, ['fade', s + 0.1, 0.3])
  draw('ink-2', d, 0.8, ['draw', s, 0.45])
}
// Sill plate + rim joist.
draw('wood', rect(X0, FLOOR, X1, STEM) + `M${X0} ${STEM - 2}H${X1}`, 1.1, ['draw', P2.start + 2.0, 0.35])

// ── 03 framing ──
draw('wood', `M${WING.x0} ${FLOOR - 2}H${MAIN.x1}`, 1.6, ['draw', F.start + 0.05, 0.4])
{
  // Studs, kings, and cripples, each a vertical line drawn bottom-up, left to right.
  const studs: [number, number, number][] = []
  const run = (x0: number, x1: number, plate: number) => {
    for (let x = x0; x <= x1; x += 14) {
      const o = openings.find(o => x > o.x0 - 3 && x < o.x1 + 3 && o.plate === plate)
      if (!o) studs.push([x, FLOOR - 2, plate])
      else {
        if (!o.door) studs.push([x, FLOOR - 2, o.y1])
        studs.push([x, o.y0 - 8, plate])
      }
    }
  }
  run(WING.x0, WING.x1 - 6, WING.plate)
  run(MAIN.x0, MAIN.x1, MAIN.plate)
  for (const o of openings) studs.push([o.x0 - 2, FLOOR - 2, o.plate], [o.x1 + 2, FLOOR - 2, o.plate])
  studs.sort((p, q) => p[0] - q[0])
  studs.forEach(([x, y0, y1], i) => draw('wood', `M${x} ${y0}V${y1}`, 1.1, ['draw', F.start + 0.2 + i * 0.02, 0.3]))
}
draw(
  'wood',
  openings
    .map(o => `M${o.x0 - 2} ${o.y0 - 8}H${o.x1 + 2}M${o.x0 - 2} ${o.y0 - 4}H${o.x1 + 2}M${o.x0 - 2} ${o.y0}H${o.x1 + 2}` + (o.door ? '' : `M${o.x0} ${o.y1}H${o.x1}`))
    .join(''),
  1,
  ['draw', F.start + 1.3, 0.4],
)
draw(
  'wood',
  `M${WING.x0} ${WING.plate}H${MAIN.x0}M${WING.x0} ${WING.plate + 3}H${MAIN.x0}M${MAIN.x0} ${MAIN.plate}H${MAIN.x1}M${MAIN.x0} ${MAIN.plate + 3}H${MAIN.x1}`,
  1.1,
  ['draw', F.start + 1.35, 0.4],
)
{
  const gable: number[] = []
  for (let x = MAIN.x0 + 14; x < MAIN.x1; x += 14) gable.push(x)
  gable.forEach((x, i) =>
    draw('wood', `M${x} ${MAIN.plate - 1}V${r(rake(x) + 1)}`, 1.1, ['draw', F.start + 1.85 + Math.abs(i - (gable.length - 1) / 2) * 0.035, 0.28]),
  )
}
{
  let d = `M326 266H${MAIN.x0}M326 318H${MAIN.x0}`
  for (let x = 330; x < MAIN.x0; x += 24) d += `M${x} 266V318`
  draw('wood', d, 0.9, ['draw', F.start + 1.75, 0.5])
}
draw('wood', `M464 282L${MAIN.ridgeX} 156L748 282M476 282L${MAIN.ridgeX} ${MAIN.peak}L736 282`, 1.3, ['draw', F.start + 1.45, 0.5])

// ── 04 dry-in ──
// 4×8 sheets of sheathing, bottom row first.
{
  const wallTop = (x0: number, x1: number) => {
    let t = x0 < MAIN.x0 ? WING.plate : Infinity
    const m0 = Math.max(x0, MAIN.x0)
    const m1 = Math.min(x1, MAIN.x1)
    if (m1 > m0) t = Math.min(t, m0 <= MAIN.ridgeX && m1 >= MAIN.ridgeX ? MAIN.peak : Math.min(rake(m0), rake(m1)))
    return t
  }
  let i = 0
  ;[FLOOR - 80, FLOOR - 160, FLOOR - 240].forEach((y, row) => {
    for (let x = WING.x0; x < MAIN.x1; x += 40) {
      if (y + 80 <= wallTop(x, x + 40)) continue // entirely above the walls
      add({ cls: 'osb', d: rect(x + 0.5, y + 0.5, x + 39.5, y + 79.5), w: 0.6, clip: 'walls', a: a(['set', D.start + i * 0.02 + row * 0.05, 0.22]) })
      i++
    }
  })
}
// Siding goes on bottom-up (the wipe clip), then battens, then trim.
add({ cls: 'siding', d: walls, clip: 'wipe', a: a(['fade', D.start + 1.0, 0.01]) })
{
  const keepOut = [
    ...openings.map(o => ({ x0: o.x0 - 6, x1: o.x1 + 6, y0: o.y0 - 10, y1: o.door ? FLOOR : o.y1 + 9 })),
    { x0: attic.x0 - 6, x1: attic.x1 + 6, y0: attic.y0 - 10, y1: attic.y1 + 8 },
  ]
  const segs: string[] = []
  const run = (x0: number, x1: number, top: (x: number) => number, bottom: number) => {
    for (let x = x0; x <= x1; x += 12) {
      let y = top(x)
      let d = ''
      for (const o of keepOut.filter(o => x > o.x0 && x < o.x1 && o.y1 > y && o.y0 < bottom).sort((p, q) => p.y0 - q.y0)) {
        if (o.y0 > y + 2) d += `M${x} ${r(y)}V${r(o.y0)}`
        y = Math.max(y, o.y1)
      }
      if (y < bottom - 2) d += `M${x} ${r(y)}V${bottom}`
      if (d) segs.push(d)
    }
  }
  run(WING.x0 + 10, WING.x1 - 8, () => 327, 404)
  run(MAIN.x0 + 12, MAIN.x1 - 10, x => Math.max(rake(x) + 4, Math.abs(x - MAIN.ridgeX) < 30 ? 197 : 0), 279)
  run(MAIN.x0 + 12, MAIN.x1 - 10, () => 285, 404)
  segs.forEach((d, i) => draw('ink-3', d, 0.7, ['draw', D.start + 1.2 + i * 0.012, 0.4]))
}
// Band board at the gable, corner boards, frieze under the rake, skirt board.
show(
  'trim',
  rect(MAIN.x0, 279, MAIN.x1, 285) + rect(MAIN.x0, 285, MAIN.x0 + 6, 404) + rect(MAIN.x1 - 6, 285, MAIN.x1, 404) + rect(WING.x0, 322, WING.x0 + 5, 404),
  0.9,
  ['fade', D.start + 1.5, 0.4],
)
draw('ink-3', `M486 ${r(rake(486) + 5)}L${MAIN.ridgeX} ${MAIN.peak + 5}L726 ${r(rake(726) + 5)}`, 0.8, ['draw', D.start + 1.6, 0.5])
show('trim', rect(X0 - 2, 404, X1 + 2, STEM), 1, ['fade', D.start + 1.55, 0.35])
draw('ink', walls, 1.4, ['draw', D.start + 0.1, 0.7])

// Brick chimney, behind the porch roof.
{
  let joints = ''
  for (let k = 0, y = 230; y < 270; k++, y += 4.5) {
    joints += `M360 ${r(y)}H380`
    for (let x = 360 + (k % 2 ? 3.5 : 7); x < 380; x += 7) joints += `M${r(x)} ${r(y)}V${r(y + 4.5)}`
  }
  show('brick', rect(360, 228, 380, 270), undefined, ['fade', D.start + 0.45, 0.35])
  draw('brick-line', joints, 0.6, ['draw', D.start + 0.55, 0.5])
  draw('ink', `M360 270V228H380V270M355 228H385V223H355Z`, 1, ['draw', D.start + 0.45, 0.45])
}

// Metal roof on the porch wing, seen from the eave: standing seams, fascia, gutter.
show('roof', rect(326, 266, MAIN.x0, 314), undefined, ['fade', D.start + 0.55, 0.4])
{
  let d = ''
  for (let x = 332; x < MAIN.x0 - 2; x += 8) d += `M${x} 268V313`
  draw('seam', d, 0.7, ['draw', D.start + 0.75, 0.5])
}
show('roof', rect(322, 314, MAIN.x0, 322), undefined, ['fade', D.start + 0.6, 0.35])
show('gutter', rect(320, 322, MAIN.x0, 326.5), 0.8, ['fade', D.start + 1.1, 0.3])
draw('downspout', 'M327 326V432L321 439', 2.6, ['draw', D.start + 1.2, 0.4])
draw('ink-2', 'M324.5 360H329.5M324.5 400H329.5', 0.8, ['draw', D.start + 1.5, 0.2])
show('roof', `M464 282L${MAIN.ridgeX} 156L748 282L736 282L${MAIN.ridgeX} ${MAIN.peak}L476 282Z`, undefined, ['fade', D.start + 0.6, 0.4])

// Timber collar tie + king post under the peak.
show('timber', rect(580, 189, 632, 193.5) + rect(604, MAIN.peak + 1, 608, 189), 0.8, ['fade', D.start + 1.75, 0.35])

// Windows: glass, glow (lit at move-in), sashes, casing, head cap, sill + apron.
windows.forEach((o, i) => {
  const s = D.start + 1.5 + i * 0.08
  const ym = (o.y0 + o.y1) / 2
  const xm = (o.x0 + o.x1) / 2
  show('glass', rect(o.x0, o.y0, o.x1, o.y1), undefined, ['fade', s, 0.3])
  show('glow', rect(o.x0, o.y0, o.x1, o.y1), undefined, ['fade', E.start + 0.15 + i * 0.1, 0.5])
  draw('shine', `M${o.x0 + 6} ${r(ym - 8)}L${o.x0 + 16} ${o.y0 + 8}M${o.x0 + 6} ${r(o.y1 - 8)}L${o.x0 + 13} ${r(ym + 9)}`, 1, ['draw', s + 0.3, 0.3])
  draw(
    'ink-2',
    rect(o.x0 + 2.5, o.y0 + 2.5, o.x1 - 2.5, o.y1 - 2.5) + `M${o.x0} ${r(ym - 1.2)}H${o.x1}M${o.x0} ${r(ym + 1.2)}H${o.x1}M${xm} ${o.y0}V${r(ym - 1.2)}M${xm} ${r(ym + 1.2)}V${o.y1}`,
    0.7,
    ['draw', s + 0.15, 0.45],
  )
  show('trim', rect(o.x0 - 7, o.y0 - 9, o.x1 + 7, o.y0 - 4) + rect(o.x0 - 7, o.y1, o.x1 + 7, o.y1 + 3.5) + rect(o.x0 - 3, o.y1 + 3.5, o.x1 + 3, o.y1 + 8), 0.9, ['fade', s + 0.1, 0.3])
  draw('ink', rect(o.x0 - 4, o.y0 - 4, o.x1 + 4, o.y1) + rect(o.x0, o.y0, o.x1, o.y1), 1.1, ['draw', s, 0.5])
})
show('glass', rect(attic.x0, attic.y0, attic.x1, attic.y1), undefined, ['fade', D.start + 1.7, 0.3])
show('glow', rect(attic.x0, attic.y0, attic.x1, attic.y1), undefined, ['fade', E.start + 0.7, 0.5])
show('trim', rect(attic.x0 - 6, attic.y0 - 8, attic.x1 + 6, attic.y0 - 3.5) + rect(attic.x0 - 6, attic.y1, attic.x1 + 6, attic.y1 + 3.5), 0.9, ['fade', D.start + 1.8, 0.3])
draw(
  'ink',
  rect(attic.x0 - 3.5, attic.y0 - 3.5, attic.x1 + 3.5, attic.y1) + rect(attic.x0, attic.y0, attic.x1, attic.y1) + `M${(attic.x0 + attic.x1) / 2} ${attic.y0}V${attic.y1}M${attic.x0} ${(attic.y0 + attic.y1) / 2}H${attic.x1}`,
  1,
  ['draw', D.start + 1.75, 0.4],
)

// Front door: painted at move-in, 4-lite glass up top, two panels below.
{
  const { x0, x1, y0, y1 } = door
  show('glass', rect(x0, y0, x1, y1), undefined, ['fade', D.start + 1.65, 0.3])
  show('door', rect(x0, y0, x1, y1), undefined, ['fade', E.start, 0.5])
  show('glow', rect(x0 + 5, y0 + 6, x1 - 5, y0 + 30), undefined, ['fade', E.start + 0.2, 0.5])
  show('trim', rect(x0 - 7, y0 - 9, x1 + 7, y0 - 4), 0.9, ['fade', D.start + 1.75, 0.3])
  draw(
    'ink',
    rect(x0 - 4, y0 - 4, x1 + 4, y1) + rect(x0, y0, x1, y1) + rect(x0 + 5, y0 + 6, x1 - 5, y0 + 30) +
      `M${(x0 + x1) / 2} ${y0 + 6}V${y0 + 30}M${x0 + 5} ${y0 + 18}H${x1 - 5}` +
      rect(x0 + 5, y0 + 36, x1 - 5, y0 + 50) + rect(x0 + 5, y0 + 55, x1 - 5, y1 - 6),
    1,
    ['draw', D.start + 1.7, 0.55],
  )
  show('knob', circle(x1 - 5, y0 + 42, 1.3), undefined, ['fade', D.start + 2.1, 0.2])
  // Lanterns either side.
  for (const lx of [x0 - 10, x1 + 10]) {
    show('halo', circle(lx, 352, 9), undefined, ['fade', E.start + 0.35, 0.6])
    show('glass', rect(lx - 2.5, 347, lx + 2.5, 356), undefined, ['fade', D.start + 2.0, 0.2])
    show('glow', rect(lx - 2.5, 347, lx + 2.5, 356), undefined, ['fade', E.start + 0.3, 0.4])
    draw('ink', rect(lx - 2.5, 347, lx + 2.5, 356) + `M${lx - 3.5} 347H${lx + 3.5}L${lx + 1.5} 344H${lx - 1.5}ZM${lx} 344V341M${lx - 2} 358H${lx + 2}`, 0.8, ['draw', D.start + 2.0, 0.3])
  }
}

// Porch posts (framed in phase 3, trimmed at dry-in), rail, and steps.
POSTS.forEach((x, i) => {
  add({ cls: 'post', d: rect(x, 322, x + 7, FLOOR), w: 1, a: a(['growy', F.start + 1.9 + i * 0.08, 0.35]) })
  show('trim', rect(x - 1.5, 322, x + 8.5, 327) + rect(x - 1, FLOOR - 6, x + 8, FLOOR), 0.9, ['fade', D.start + 1.9, 0.3])
})
{
  let balusters = ''
  for (let x = 350; x < 404; x += 5.5) balusters += `M${r(x)} 379V400`
  draw('ink-2', balusters, 0.8, ['draw', D.start + 2.1, 0.4])
  show('trim', rect(345, 376, 406, 379) + rect(345, 400, 406, 402.5), 0.9, ['fade', D.start + 2.0, 0.3])
}
{
  const rise = (G - FLOOR) / 3
  let d = ''
  for (let k = 0; k < 3; k++) d += rect(418, FLOOR + k * rise, 464, FLOOR + (k + 1) * rise) + `M416 ${r(FLOOR + k * rise)}H466`
  show('trim', rect(418, FLOOR, 464, G), undefined, ['fade', D.start + 2.15, 0.3])
  draw('ink', d, 0.9, ['draw', D.start + 2.15, 0.4])
}

// ── 05 move-in ──
// Service line from the pole to a mast on the porch roof.
draw('ink-2', 'M331 290V256q0 -4 -4 -4', 1.2, ['draw', E.start + 0.1, 0.25])
draw('ink-3', 'M243 249Q290 268 327 253', 0.8, ['draw', E.start + 0.3, 0.5])

draw('smoke', 'M371 220C365 210 377 203 372 192S364 174 374 164S388 150 381 138', 1.2, ['draw', E.start + 0.6, 1.3])
show('sage-3', tufts(LOT.x0 + 4, 316, 5) + tufts(X1 + 14, LOT.x1 - 2, 9), 0.8, ['fade', E.start + 0.5, 0.6])

// Foundation plantings.
;[
  [356, 10, 4], [392, 12, 5], [492, 12, 5], [524, 15, 6], [562, 11, 4], [606, 10, 4],
  [648, 12, 5], [686, 15, 6], [722, 12, 5], [768, 16, 6],
].forEach(([cx, rad, lobes], i) =>
  add({ cls: 'shrub', d: lobed(cx, G, rad, lobes), w: 1, a: a(['grow', E.start + 0.25 + i * 0.06, 0.45]) }),
)
for (const [x, i] of [[472, 0], [742, 1]]) {
  add({
    cls: 'sage',
    d: 'M0 0Q-3 -10 -10 -16M0 0Q-1 -12 -4 -22M0 0Q1 -13 3 -24M0 0Q3 -10 9 -18M0 0Q2 -6 12 -9',
    w: 0.9,
    at: [x, G],
    a: a(['grow', E.start + 0.4 + i * 0.2, 0.45]),
  })
}

// Mailbox out by the road: black box with a raised flag, on a white post and arm.
show('trim', rect(284, 410, 288.5, G) + rect(274, 408, 300, 410.5), 0.9, ['fade', E.start + 0.8, 0.4])
show('mailbox', 'M272 408V399Q272 396 275 396H295Q298 396 298 399V408ZM298 397.5V408M298 399.5h1.8v3h-1.8', 1, ['fade', E.start + 0.8, 0.4])
draw('mailbox-seam', 'M272.5 400.5H297.5', 0.7, ['draw', E.start + 0.9, 0.3])
show('flag', 'M276 405V392.5M276 392.5H283V397.5H276', 1, ['fade', E.start + 1.0, 0.3])

export { parts }
