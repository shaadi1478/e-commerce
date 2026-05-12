import { createBrowserRouter } from "react-router-dom";

/* LAYOUT */
import MainLayout from "../components/layout/MainLayout";

/* PAGES */
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

/* BLOG SYSTEM */
import Blog from "../pages/Blog"; // ✅ page
import BlogDetails from "../pages/BlogDetails";

/* OTHER PAGES */
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import DeveloperSection from "../pages/DeveloperSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "product/:id", element: <ProductDetails /> },

      /* BLOG */
      { path: "blog", element: <Blog /> }, // ✅ FIXED
      { path: "blog/:id", element: <BlogDetails /> },

      /* OTHER */
      { path: "contact", element: <Contact /> },
      { path: "terms", element: <Terms /> },
      {
  path: "developer",
  element: <DeveloperSection />,
},
    ],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;