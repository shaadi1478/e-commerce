import blogs from "../data/blogs";
import BlogCard from "../components/blog/BlogCard";

export default function Blog() {
  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="container lg:py-28 py-5">

        {/* HEADER */}
        <div className="mb-12 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Latest Blog Posts
          </h1>

          <p className="text-slate-500 mt-3">
            Stay updated with latest tech trends, guides & reviews
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}

        </div>

      </div>

    </div>
  );
}