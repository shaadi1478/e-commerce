import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import TermsModal from "../TermsModal";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [openTerms, setOpenTerms] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-slate-500 hover:text-slate-900 transition";

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="bg-slate-50 border-t border-black/5 mt-20">

      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={1}
        >

          {/* LOGO + NAME */}
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

          {/* DESCRIPTION */}
          <p className="text-slate-500 mt-4 leading-relaxed">
            Premium electronics & mobile shop in Bangladesh.
            Original products with warranty and trusted support.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-5">

            {/* Facebook */}
            <motion.a
              href="https://www.facebook.com/rubel.matubber.96"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-blue-600 hover:text-white transition flex items-center justify-center text-slate-700"
            >
              <FaFacebookF />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-pink-500 hover:text-white transition flex items-center justify-center text-slate-700"
            >
              <FaInstagram />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801913784446"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-green-500 hover:text-white transition flex items-center justify-center text-slate-700"
            >
              <FaWhatsapp />
            </motion.a>

          </div>

        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={2}
        >
          <h3 className="text-slate-900 text-xl mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3">
            <Link className="text-slate-500 hover:text-slate-900 transition" to="/">
              Home
            </Link>
            <Link className="text-slate-500 hover:text-slate-900 transition" to="/shop">
              Shop
            </Link>
            <Link className="text-slate-500 hover:text-slate-900 transition" to="/cart">
              Cart
            </Link>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </motion.div>

        {/* SUPPORT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={3}
        >
          <h3 className="text-slate-900 text-xl mb-4">Support</h3>

          <div className="flex flex-col gap-3">
            <NavLink to="/delivery" className={linkClass}>📦 Fast Delivery</NavLink>
            <NavLink to="/warranty" className={linkClass}>🛡 Warranty Products</NavLink>
            <NavLink to="/contact" className={linkClass}>💬 24/7 Support</NavLink>
            <NavLink to="/developer" className={linkClass}>👨‍💻 Developer</NavLink>

            <button
              onClick={() => setOpenTerms(true)}
              className="text-left text-blue-600 hover:text-blue-500 transition"
            >
              📄 Terms & Conditions
            </button>
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          custom={4}
        >
          <h3 className="text-slate-900 text-xl mb-4">Contact</h3>

          <div className="text-slate-500 space-y-3">
            <p>📍 PathoriarPar Bazar, Dasar, Madaripur</p>

            <a href="tel:+8801913784446" className="block hover:text-slate-900">
              📞 +01913784446
            </a>

            <a href="mailto:support@techzone.com" className="block hover:text-slate-900">
              ✉ mayardoyakeyecom@gmail.com
            </a>
          </div>

          {/* MAP */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4 rounded-2xl overflow-hidden border border-black/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5556715163857!2d90.15155017588252!3d23.07674601430313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375569d66440ad17%3A0xbfb1ad32d2345178!2z4Kaq4Ka-4Kal4Kaw4Ka_4Kav4Ka84Ka-4Kaw4Kaq4Ka-4KawIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sbn!2sbd!4v1778593540670!5m2!1sbn!2sbd"
              className="w-full h-40"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>

        </motion.div>

      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-t border-black/5 py-6 text-center text-slate-500 text-sm"
      >
        © {new Date().getFullYear()} TechZone. All rights reserved.
      </motion.div>

      <TermsModal open={openTerms} setOpen={setOpenTerms} />

    </footer>
  );
}