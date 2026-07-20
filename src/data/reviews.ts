export interface Review {
  /** Reviewer's name exactly as shown on Google, e.g. "Sarah M." */
  name: string
  /** Star rating, 1–5 */
  rating: number
  /** Review text, verbatim from the Google review. Trim long ones with … but never reword. */
  text: string
  /** Optional town for context, e.g. "Athens" */
  location?: string
}

// Paste real reviews from the Google Business Profile here, verbatim.
// The homepage "What clients say" section renders automatically once this
// array has entries; with none, nothing shows. Never invent review text —
// fabricated reviews are illegal (FTC) and exactly the kind of thing that
// makes a site untrustworthy.
export const reviews: Review[] = []
