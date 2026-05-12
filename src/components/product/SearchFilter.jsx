import { useMemo } from "react";

export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  // 🧠 SMART CATEGORY LIST (your full system)
  const categories = useMemo(
    () => [
      { label: "All Categories", value: "" },

      { label: "📱 Phone (iPhone, Samsung)", value: "phone" },
      { label: "⚡ IPS / UPS", value: "ips" },
      { label: "🔋 Battery", value: "battery" },
      { label: "🔌 Charger", value: "charger" },
      { label: "🎧 Earbuds", value: "earbuds" },
      { label: "🎧 Neckband", value: "neckband" },
      { label: "🧰 Accessories", value: "accessories" },
      { label: "☀ Solar", value: "solar" },

      { label: "💻 Laptop", value: "laptop" },
      { label: "🎮 Gaming", value: "gaming" },
      { label: "⌚ Watch", value: "watch" },
    ],
    []
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10">

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search products... (iphone, charger, solar)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-white border border-black/10 rounded-xl px-4 py-3 text-slate-800 outline-none focus:border-blue-500 shadow-sm transition"
      />

      {/* CATEGORY SELECT (UPDATED) */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-white border border-black/10 rounded-xl px-4 py-3 text-slate-700 outline-none focus:border-blue-500 shadow-sm transition"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>

    </div>
  );
}