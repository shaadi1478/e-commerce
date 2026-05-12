import { FiX } from "react-icons/fi";

export default function TermsModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 text-white w-[90%] max-w-2xl rounded-2xl p-6 relative">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-white"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Terms & Conditions
        </h2>

        <div className="space-y-3 text-slate-300 text-sm leading-6">

          <p>✔ All products are subject to availability.</p>
          <p>✔ Prices may change without notice.</p>
          <p>✔ Delivery time: 2–5 business days.</p>
          <p>✔ No refund after product used.</p>
          <p>✔ We reserve the right to cancel orders.</p>

        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
        >
          I Understand
        </button>

      </div>

    </div>
  );
}