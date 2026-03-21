/** Send a Google Analytics event. Safe to call even if GA isn't loaded yet. */
export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}
