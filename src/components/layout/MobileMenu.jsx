import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

export default function MobileMenu({ open, setOpen }) {

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-700 hover:text-blue-500 transition";

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 left-0 w-[280px] h-full bg-white border-r border-black/10 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="p-6 flex flex-col gap-6 text-lg">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">

            <h2 className="text-blue-600 text-2xl font-bold">
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-slate-700 text-2xl hover:text-blue-500"
            >
              <FiX />
            </button>

          </div>

          {/* LINKS */}
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/shop" className={linkClass} onClick={() => setOpen(false)}>
            Shop
          </NavLink>

          <NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>
            Cart
          </NavLink>

          <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

        </div>
      </div>
    </>
  );
}