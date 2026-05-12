import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "../LiveChat";
import ToastStack from "../ToastStack";
import useToast from "../../hooks/useToast";

export default function MainLayout() {

  const { toasts, showToast } = useToast();

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900 flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-1 pt-20">
        <Outlet context={{ showToast }} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* GLOBAL TOAST */}
      <ToastStack toasts={toasts} />

      {/* CHAT */}
      <LiveChat />

    </div>
  );
}