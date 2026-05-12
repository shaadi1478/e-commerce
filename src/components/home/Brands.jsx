import { useNavigate } from "react-router-dom";
import products from "../../data/products";
import { motion } from "framer-motion";

const brands = [
  { name: "Apple", key: "apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", key: "samsung", logo: "https://images.samsung.com/is/image/samsung/assets/bd/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
  { name: "Sony", key: "sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { name: "Canon", key: "canon", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAOWSNBamK7QVH6F5RBHcISYRHWiC3Xm2Sw&s" },
  { name: "JBL", key: "jbl", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAzN3ctEE5OI2HPgNoWEe_zT39YJJYrUQsg&s" },
  { name: "TP-Link", key: "tp-link", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ6bXnAsuhhxY03OZcMdXvDeFOmcE6oW7ow&s" },
];

export default function Brands() {
  const navigate = useNavigate();

  const getCount = (brandKey) =>
    products.filter((p) => p.brand === brandKey).length;

  return (
    <div className="bg-white">
      <div className="container md:py-24 py-10 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Shop by Brand
        </h1>

        <p className="text-slate-500 mt-3">
          Explore products from top global brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">

          {brands.map((brand, i) => (
            <motion.div
              key={brand.key}
              onClick={() => navigate(`/shop?brand=${brand.key}`)}
              className="bg-white border border-black/10 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >

              {/* LOGO */}
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-14 w-14 object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80?text=Brand";
                }}
              />

              {/* NAME */}
              <p className="mt-3 font-semibold text-slate-800">
                {brand.name}
              </p>

              {/* PRODUCT COUNT */}
              <span className="text-xs text-slate-500 mt-1">
                {getCount(brand.key)} Products
              </span>

              {/* HOVER TEXT */}
              <div className="mt-3 text-xs text-blue-600 font-medium opacity-0 hover:opacity-100 transition">
                View Products →
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}