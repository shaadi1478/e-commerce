import { useNavigate } from "react-router-dom";
import { FiCalendar, FiTag, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <motion.div
      onClick={goToDetails}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}   // ✅ only lift effect (no scale zoom)
      whileTap={{ scale: 0.98 }}
      className="group bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 cursor-pointer"
    >

      {/* IMAGE */}
      <div className="h-56 overflow-hidden relative">

        <img
          src={blog.image}
          alt={blog.title}
          onClick={(e) => e.stopPropagation()}
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* CATEGORY */}
        <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          {blog.category}
        </span>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <FiTag className="text-blue-500" />
            {blog.category}
          </span>

          <span className="flex items-center gap-1">
            <FiCalendar className="text-blue-500" />
            {blog.date}
          </span>
        </div>

        <h2 className="text-xl font-bold mt-3 line-clamp-2 text-slate-900 group-hover:text-blue-600 transition">
          {blog.title}
        </h2>

        <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-2 text-blue-600 font-medium">
          Read More <FiArrowRight />
        </div>

      </div>
    </motion.div>
  );
}