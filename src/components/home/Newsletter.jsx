import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="py-20 bg-slate-50 border-t border-black/5">

      <div className="container text-center px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-900 text-2xl md:text-3xl font-bold"
        >
          Subscribe for Exclusive Offers 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mt-2 text-sm md:text-base"
        >
          Get latest deals, tech updates & discounts directly in your inbox.
        </motion.p>

        {/* FORM */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >

          <motion.input
            whileFocus={{ scale: 1.02 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[320px] p-3 rounded-xl bg-white border border-black/10 text-slate-800 outline-none focus:border-blue-500 shadow-sm transition"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubscribe}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-medium w-full sm:w-auto"
          >
            Subscribe
          </motion.button>

        </motion.div>

        {/* NOTE */}
        <p className="text-slate-400 text-xs mt-4">
          No spam, unsubscribe anytime.
        </p>

      </div>
    </div>
  );
}