import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogs";
import { motion } from "framer-motion";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center text-slate-500 py-40">
        Blog Not Found 😔
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="container max-w-4xl py-28">

        {/* BACK BUTTON */}
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-sm text-slate-500 hover:text-slate-900 transition flex items-center gap-2"
        >
          ← Back
        </motion.button>

        {/* IMAGE */}
        <motion.img
          src={blog.image}
          alt={blog.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[420px] object-cover rounded-2xl border border-black/10 shadow-sm"
        />

        {/* META */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 mt-5 text-sm"
        >
          {blog.category} • {blog.date} • By {blog.author}
        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mt-3 leading-tight text-slate-900"
        >
          {blog.title}
        </motion.h1>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 mt-6 leading-7 text-lg"
        >
          {blog.content?.intro}
        </motion.p>

        {/* SECTIONS */}
        <div className="mt-10 space-y-8">

          {blog.content?.sections?.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white border border-black/5 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >

              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                {section.heading}
              </h2>

              <p className="text-slate-600 leading-7">
                {section.text}
              </p>

            </motion.div>
          ))}

        </div>

        {/* CONCLUSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-100"
        >

          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            🧾 Conclusion
          </h3>

          <p className="text-slate-600 leading-7">
            {blog.content?.conclusion}
          </p>

        </motion.div>

      </div>
    </div>
  );
}