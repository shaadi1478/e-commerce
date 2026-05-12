import { useState } from "react";

export default function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  return { toasts, showToast };
}