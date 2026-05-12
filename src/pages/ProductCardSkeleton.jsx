export function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">

      {/* IMAGE SKELETON */}
      <div className="h-56 bg-slate-100 animate-pulse" />

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        <div className="h-3 bg-slate-200 rounded animate-pulse w-1/3" />

        <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3" />

        <div className="h-3 bg-slate-200 rounded animate-pulse w-1/2" />

        {/* PRICE BUTTON AREA */}
        <div className="h-10 bg-slate-200 rounded animate-pulse mt-4" />

      </div>

    </div>
  );
}