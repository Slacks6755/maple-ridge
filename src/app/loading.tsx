export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-stone-50">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-ridge-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-stone-500 text-sm">Loading...</p>
      </div>
    </div>
  )
}
