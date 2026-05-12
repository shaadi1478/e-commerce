import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";

export default function Cart() {

  const {
    cart,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      {/* HEADER */}
      <div className="container mx-auto px-4 md:px-10 pt-28 pb-10">

        <h1 className="text-4xl font-bold tracking-wide">
          Shopping Cart
        </h1>

        <p className="text-slate-400 mt-2">
          Review your items before checkout
        </p>

      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 md:px-10 grid lg:grid-cols-3 gap-10">

        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">

          {cart.length === 0 && (
            <div className="bg-slate-900 p-10 rounded-2xl text-center text-slate-400">
              Your cart is empty 🛒
            </div>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-blue-500/30 transition"
            >

              {/* IMAGE + INFO */}
              <div className="flex items-center gap-4 w-full md:w-auto">

                <img
                  src={item.image || item.images?.[0]}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div>
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>

                  <p className="text-blue-400 font-medium">
                    ৳ {item.price}
                  </p>
                </div>

              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3 bg-slate-800 px-3 py-2 rounded-xl">

                <button onClick={() => decreaseQty(item.id)}>
                  <FiMinus />
                </button>

                <span className="w-6 text-center">
                  {item.qty}
                </span>

                <button onClick={() => increaseQty(item.id)}>
                  <FiPlus />
                </button>

              </div>

              {/* TOTAL + REMOVE */}
              <div className="flex items-center gap-6">

                <p className="text-blue-400 font-bold text-lg">
                  ৳ {item.price * item.qty}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:scale-110 transition"
                >
                  <FiTrash />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT - SUMMARY CARD (STICKY) */}
        {cart.length > 0 && (
          <div className="lg:col-span-1">

            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 sticky top-28">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-slate-300 mb-3">
                <span>Subtotal</span>
                <span>৳ {totalPrice}</span>
              </div>

              <div className="flex justify-between text-slate-300 mb-3">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>

              <div className="border-t border-white/10 my-4"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-400">৳ {totalPrice}</span>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-slate-500 text-center mt-3">
                Secure checkout • Cash on delivery available
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}