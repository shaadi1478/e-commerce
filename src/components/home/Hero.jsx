import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroSlides from "../../data/heroSlides";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className="w-full bg-slate-50 overflow-hidden">

      <div className="container py-6">

        {/* SLIDER */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[500px] overflow-hidden rounded shadow-2xl">

          {/* SLIDES */}
          <AnimatePresence mode="wait">

            <motion.img
              key={heroSlides[index].id}
              src={heroSlides[index].image}
              onClick={() => handleClick(heroSlides[index].category)}
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />

          </AnimatePresence>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

          {/* CONTENT */}
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="absolute bottom-6 left-6 z-20"
          >

            <p className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-sm md:text-base font-semibold shadow-lg">
              {heroSlides[index].category}
            </p>

            <h2 className="text-white text-2xl md:text-5xl font-bold mt-4 max-w-xl leading-tight">
              Premium Products with Trusted Quality
            </h2>

            <button
              onClick={() =>
                handleClick(heroSlides[index].category)
              }
              className="mt-5 bg-white text-slate-900 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              Shop Now
            </button>

          </motion.div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">

          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}

        </div>

      </div>

    </div>
  );
}