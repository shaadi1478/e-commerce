import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  const discountPrice =
    product.price - (product.price * (product.discount || 0)) / 100;

  // 🛒 ADD TO CART (toast only here)
  const handleAdd = (e) => {
    e.stopPropagation();

    addToCart(product);

    toast.success(`${product.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };

  // 🖼️ ONLY IMAGE CLICK → DETAILS PAGE
  const goDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-lg transition">

      {/* IMAGE (ONLY CLICKABLE PART FOR DETAILS) */}
      <div
        onClick={goDetails}
        className="relative h-64 bg-slate-50 overflow-hidden cursor-pointer"
      >

        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-slate-100" />
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-contain group-hover:scale-105 transition duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DISCOUNT */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}

        {/* WISHLIST */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWishlist(!wishlist);
          }}
          className="absolute top-3 right-3 bg-white/90 shadow p-2 rounded-full"
        >
          <FiHeart className={wishlist ? "text-red-500" : "text-slate-700"} />
        </button>

      </div>

      {/* CONTENT (NOT CLICKABLE FOR NAVIGATION) */}
      <div className="p-5">

        <p className="text-xs text-slate-500">
          {product.category}
        </p>

        <h2 className="text-slate-800 font-semibold line-clamp-1">
          {product.name}
        </h2>

        <div className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating || 4.5}
        </div>

        <div className="mt-2 flex items-center gap-2">

          <p className="text-blue-600 text-xl font-bold">
            ৳ {Math.round(discountPrice)}
          </p>

          {product.discount > 0 && (
            <span className="text-slate-400 line-through text-sm">
              ৳ {product.price}
            </span>
          )}

        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-4">

          <button
            onClick={handleAdd}
            className="flex-1 bg-blue-600 px-[3px] py-3 rounded-xl text-white hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
          >
            <FiShoppingCart />
            Add To Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex-1 bg-green-600 py-3 rounded-xl text-white hover:bg-green-700 transition font-medium"
          >
            Buy Now
          </button>

        </div>

      </div>
    </div>
  );
}