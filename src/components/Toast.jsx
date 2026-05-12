export default function Toast({ show, message }) {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 bg-green-500 text-white px-4 py-3 rounded-xl shadow-lg z-50">
      {message}
    </div>
  );
}