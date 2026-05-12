import { FiTruck, FiShield, FiPhone, FiRefreshCw } from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    desc: "Delivery within 24–72 hours across Bangladesh",
    color: "text-blue-600",
  },
  {
    icon: <FiShield />,
    title: "Warranty Guarantee",
    desc: "Official product warranty with replacement support",
    color: "text-green-600",
  },
  {
    icon: <FiPhone />,
    title: "24/7 Support",
    desc: "We are always ready to help you anytime",
    color: "text-yellow-500",
  },
  {
    icon: <FiRefreshCw />,
    title: "Easy Return",
    desc: "7-day hassle-free return policy",
    color: "text-purple-600",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="md:py-24 py-10 bg-slate-50">
      <div className="container">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-900 text-3xl font-bold text-center mb-12"
        >
          Why Choose TechZone?
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white border border-black/5 p-6 rounded-2xl text-center shadow-sm hover:shadow-xl transition"
            >

              {/* ICON */}
              <div className={`${item.color} text-4xl flex justify-center`}>
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-slate-800 mt-4 font-semibold text-lg">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm mt-2">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}