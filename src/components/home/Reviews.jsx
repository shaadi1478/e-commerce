import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  { name: "Rahim", text: "Best service in Bangladesh 🔥", rating: 5 },
  { name: "Karim", text: "Fast delivery and original product", rating: 5 },
  { name: "Sadia", text: "Very good support team", rating: 4 },
  { name: "Jahid", text: "Highly recommended shop", rating: 5 },
  { name: "Nusrat", text: "Product quality was amazing and delivery was super fast.", rating: 5 },
  { name: "Tamim", text: "Got original Apple accessories with warranty.", rating: 5 },
  { name: "Fahim", text: "Customer support answered all my questions quickly.", rating: 4 },
  { name: "Mim", text: "Best mobile and IPS shop in my area.", rating: 5 },
];

// duplicate for infinite effect
const loopReviews = [...reviews, ...reviews];

export default function Reviews() {
  return (
    <div className="md:py-24 py-5 bg-slate-50 overflow-hidden">

      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold">
            ⭐ Customer Reviews
          </h2>
          <p className="text-slate-500 mt-3">
            What our customers say about us
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="overflow-hidden">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }} // optional UX feel
          >

            {loopReviews.map((r, i) => (
              <div
                key={i}
                className="w-[300px] bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:shadow-xl transition flex-shrink-0"
              >

                {/* STARS */}
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-slate-700 text-sm leading-relaxed min-h-[70px]">
                  "{r.text}"
                </p>

                {/* USER */}
                <div className="mt-5 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {r.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-slate-900 font-semibold text-sm">
                      {r.name}
                    </p>
                    <p className="text-slate-500 text-xs">
                      Verified Customer
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </motion.div>

        </div>

      </div>
    </div>
  );
}