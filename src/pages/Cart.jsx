import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";

export default function Cart() {
  const {
    cart,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    area: "inside_dhaka",
  });

  const [deliveryCharge, setDeliveryCharge] = useState(60);

  const validatePhone = (phone) => /^01[3-9]\d{8}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (name === "area") {
      setDeliveryCharge(value === "inside_dhaka" ? 60 : 120);
    }
  };

  const generateInvoiceId = () => "INV-" + Date.now();

  const handleWhatsAppOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    if (!validatePhone(form.phone)) {
      alert("Invalid Bangladeshi phone number");
      return;
    }

    const invoiceId = generateInvoiceId();
    const shopNumber = "8801913784446";

    const items = cart
      .map(
        (item) =>
          `• ${item.name} x ${item.qty} = ৳${item.price * item.qty}`
      )
      .join("\n");

    const message = `
🧾 INVOICE: ${invoiceId}

🛒 NEW ORDER

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🏠 Address: ${form.address}

📍 Area: ${form.area === "inside_dhaka" ? "Inside Dhaka" : "Outside Dhaka"}

📦 ITEMS:
${items}

🚚 Delivery: ৳${deliveryCharge}
💰 TOTAL: ৳${totalPrice + deliveryCharge}

📅 Date: ${new Date().toLocaleString()}
    `;

    const url = `https://wa.me/${shopNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HEADER */}
      <div className="container mx-auto px-4 md:px-10 lg:pt-28 pt-5 pb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Shopping Cart
        </h1>
        <p className="text-slate-500 text-sm md:text-base">
          Review your order & checkout securely
        </p>
      </div>

      {/* MAIN */}
      <div className="container mx-auto px-4 md:px-10 grid lg:grid-cols-3 gap-8">

        {/* LEFT - CART ITEMS (RESPONSIVE FIXED) */}
        <div className="lg:col-span-2 space-y-4">

          {cart.length === 0 && (
            <div className="bg-white border border-black/5 p-10 rounded-2xl text-center text-slate-500">
              Cart is empty 🛒
            </div>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-black/5 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition"
            >

              {/* PRODUCT */}
              <div className="flex items-center gap-4 w-full sm:w-auto">

                <img
                  src={item.image}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-black/5"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-slate-800 text-sm sm:text-base line-clamp-1">
                    {item.name}
                  </h2>

                  <p className="text-blue-600 font-medium text-sm">
                    ৳ {item.price}
                  </p>
                </div>

              </div>

              {/* QTY */}
              <div className="flex items-center justify-between sm:justify-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="p-2 bg-slate-100 rounded hover:bg-slate-200"
                >
                  <FiMinus size={14} />
                </button>

                <span className="text-slate-700 font-medium min-w-[20px] text-center">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="p-2 bg-slate-100 rounded hover:bg-slate-200"
                >
                  <FiPlus size={14} />
                </button>

              </div>

              {/* TOTAL + DELETE */}
              <div className="flex items-center justify-between sm:justify-end gap-4">

                <p className="text-blue-600 font-bold text-sm sm:text-base">
                  ৳ {item.price * item.qty}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FiTrash size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT - CHECKOUT */}
        {cart.length > 0 && (
          <div className="bg-white border border-black/5 md:p-6 rounded-2xl sticky top-28">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Checkout
            </h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 mb-3 bg-slate-50 border border-black/10 rounded-xl"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              className="w-full p-3 mb-3 bg-slate-50 border border-black/10 rounded-xl"
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Full Address"
              className="w-full p-3 mb-3 bg-slate-50 border border-black/10 rounded-xl"
            />

            <select
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-slate-50 border border-black/10 rounded-xl"
            >
              <option value="inside_dhaka">Inside Dhaka (৳60)</option>
              <option value="outside_dhaka">Outside Dhaka (৳120)</option>
            </select>

            <div className="border-t border-black/10 my-4"></div>

            <div className="flex justify-between mb-2 text-slate-600">
              <span>Subtotal</span>
              <span>৳ {totalPrice}</span>
            </div>

            <div className="flex justify-between mb-2 text-slate-600">
              <span>Delivery</span>
              <span>৳ {deliveryCharge}</span>
            </div>

            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Total</span>
              <span className="text-blue-600">
                ৳ {totalPrice + deliveryCharge}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Order via WhatsApp
            </button>

          </div>
        )}

      </div>
    </div>
  );
}