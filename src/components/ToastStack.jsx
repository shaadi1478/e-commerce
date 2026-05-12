export default function ToastStack({ toasts }) {
  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg animate-slideIn min-w-[220px]"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}