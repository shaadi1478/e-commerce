import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        setLoading(false);
        setToast(true);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setToast(false), 2500);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message");
      });
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen text-slate-900">

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-6 right-6 bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg z-50"
          >
            Message sent successfully ✅
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container md:py-28 py-5 max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-5xl text-3xl font-bold mb-3">
            Contact TechZone
          </h1>

          <p className="text-slate-500 mb-10">
            We usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-100 md:p-8 p-3 rounded-2xl shadow-sm space-y-4"
          >

            {["name", "email", "subject"].map((field, i) => (
              <input
                key={i}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 outline-none focus:border-blue-400"
                required={field !== "subject"}
              />
            ))}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full bg-slate-50 p-3 rounded-xl border border-slate-100 outline-none focus:border-blue-400"
              required
            />

            <button
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-medium transition ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

          {/* INFO CARDS */}
          <div className="md:space-y-6 space-y-3">

            {[
              { icon: <FiMail />, title: "Email", value: "support@techzone.com" },
              { icon: <FiPhone />, title: "Phone", value: "+880 1XXXXXXXXX" },
              { icon: <FiMapPin />, title: "Address", value: "Mirzapur, Dhaka, Bangladesh" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 shadow-sm"
              >
                <div className="text-blue-500 text-2xl">{item.icon}</div>
                <div>
                  <p className="text-slate-500 text-sm">{item.title}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>

        {/* MAP */}
  <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4 rounded-2xl overflow-hidden border border-black/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5556715163857!2d90.15155017588252!3d23.07674601430313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375569d66440ad17%3A0xbfb1ad32d2345178!2z4Kaq4Ka-4Kal4Kaw4Ka_4Kav4Ka84Ka-4Kaw4Kaq4Ka-4KawIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sbn!2sbd!4v1778593540670!5m2!1sbn!2sbd"
              className="w-full h-[350px]"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
          </motion.div>


      </div>
    </div>
  );
}