import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ProductDetails() {

  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((p) => p.id == id);

  const [mainImg, setMainImg] = useState("");
  const [wishlist, setWishlist] = useState(false);

  /* 🔥 UPDATE IMAGE WHEN PRODUCT CHANGES */
  useEffect(() => {
    if (product) {
      setMainImg(product.image);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Product Not Found
      </div>
    );
  }

  const related = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <div className="bg-[#f5f7fb] min-h-screen text-slate-900">

      <div className="container py-28 grid md:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">

          <img
            src={mainImg}
            alt={product.name}
            className="w-full h-[450px] object-contain rounded-2xl hover:scale-105 transition duration-300"
          />

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4">

            {[product.image, product.image, product.image].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumb"
                onClick={() => setMainImg(img)}
                className={`
                  w-20 h-20 object-contain rounded-lg cursor-pointer border transition
                  ${
                    mainImg === img
                      ? "border-blue-500"
                      : "border-slate-200 hover:border-blue-300"
                  }
                `}
              />
            ))}

          </div>

        </div>

        {/* DETAILS */}
        <div>

          <div className="flex justify-between items-start gap-4">

            <h1 className="text-4xl md:text-5xl font-bold">
              {product.name}
            </h1>

            <button
              onClick={() => setWishlist(!wishlist)}
              className="text-2xl"
            >
              <FiHeart
                className={
                  wishlist
                    ? "text-red-500"
                    : "text-slate-400"
                }
              />
            </button>

          </div>

          {/* RATING */}
          <div className="mt-3 text-yellow-500">
            ⭐ {product.rating || 4.5}
          </div>

          {/* PRICE */}
          <p className="text-blue-600 text-4xl font-bold mt-6">
            ৳ {product.price}
          </p>

          {/* DISCOUNT */}
          {product.discount && (
            <p className="text-red-500 mt-2 font-medium">
              {product.discount}% OFF
            </p>
          )}

          {/* DESCRIPTION */}
          <p className="text-slate-600 mt-6 leading-relaxed">
            {product.description ||
              "Premium quality product with fast delivery across Bangladesh."}
          </p>

          {/* FEATURES */}
          <ul className="mt-6 space-y-2 text-slate-600">
            <li>✔ Original Product</li>
            <li>✔ Cash on Delivery</li>
            <li>✔ 7 Days Replacement</li>
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition"
            >
              <FiShoppingCart />
              Add To Cart
            </button>

            <button
              onClick={() =>
                navigate("/checkout", {
                  state: product,
                })
              }
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

      {/* REVIEWS */}
      <div className="container pb-20">

        <h2 className="text-2xl font-bold mb-4">
          Reviews
        </h2>

        <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-slate-700">
          ⭐ 4.8 — Excellent product quality and fast delivery.
        </div>

      </div>

      {/* RELATED PRODUCTS */}
      <div className="container pb-20">

        <h2 className="text-2xl font-bold mb-6">
          Related Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {related.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              className="bg-white border border-slate-100 p-4 rounded-xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
            >

              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-contain rounded-lg"
              />

              <h3 className="mt-3 font-medium text-slate-800">
                {p.name}
              </h3>

              <p className="text-blue-600 font-bold mt-1">
                ৳ {p.price}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* MOBILE BUTTON */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white border-t border-slate-200 p-4">

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}