import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

      <div className="text-center max-w-md">

        {/* BIG NUMBER */}
        <h1 className="text-8xl font-extrabold text-blue-600">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-slate-900 mt-4">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-500 mt-3 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          <FiArrowLeft />
          Go Back Home
        </Link>

      </div>

    </div>
  );
}