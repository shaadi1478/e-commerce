import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Phone",
    label: "মোবাইল ফোন",
    icon: "📱",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "ips",
    label: "IPS / UPS",
    icon: "🔋",
    color: "from-yellow-500 to-orange-400",
  },
  {
    name: "battery",
    label: "ব্যাটারি",
    icon: "🪫",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "charger",
    label: "চার্জার",
    icon: "🔌",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "earbuds",
    label: "ইয়ারবাডস",
    icon: "🎧",
    color: "from-violet-500 to-purple-400",
  },
  {
    name: "neckband",
    label: "নেকব্যান্ড",
    icon: "🎵",
    color: "from-indigo-500 to-blue-400",
  },
  {
    name: "accessories",
    label: "এক্সেসরিজ",
    icon: "🛠",
    color: "from-slate-700 to-slate-500",
  },
  {
    name: "solar",
    label: "সোলার",
    icon: "☀",
    color: "from-amber-500 to-yellow-400",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="md:py-20 py-10 bg-slate-50 overflow-hidden">

      <div className="container">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Featured Categories
          </h2>

          <p className="text-slate-500 mt-4 text-sm md:text-base">
            Explore premium products by category
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">

          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                navigate(`/shop?category=${cat.name.toLowerCase()}`)
              }
              className="group relative bg-white border border-black/5 rounded-3xl p-6 md:p-7 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* GLOW */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} transition duration-500`}
              />

              {/* ICON */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl shadow-lg mx-auto`}
              >
                {cat.icon}
              </div>

              {/* TEXT */}
              <div className="text-center mt-5">

                <h3 className="text-slate-900 font-bold text-lg">
                  {cat.name.toUpperCase()}
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  {cat.label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}