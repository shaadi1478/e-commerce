import { NavLink, Link } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-700 hover:text-blue-500 transition";

  return (
    <>
      <MobileMenu open={open} setOpen={setOpen} />

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">

        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* LEFT - MENU + LOGO */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-slate-800 text-2xl"
            >
              <FiMenu />
            </button>
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">

              <img
                src={logo}
                alt="logo"
                className="h-14 object-contain"
              />

              <div className="leading-tight">
                <p className="text-xl font-bold text-blue-600">
                  MDM
                </p>

                <p className="text-[10px] text-slate-500 -mt-1 tracking-wide">
                  Mayer Dowa Mobile
                </p>
              </div>

            </Link>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-slate-700">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

          </div>

          {/* CART */}
          <Link
            to="/cart"
            className="relative text-slate-800 text-2xl hover:text-blue-500 transition"
          >
            <FiShoppingCart />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </nav>
    </>
  );
}