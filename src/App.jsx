import { CartProvider } from "./context/CartContext";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}