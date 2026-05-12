import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrendingProducts from "../components/home/TrendingProducts";
import Footer from "../components/layout/Footer";
import Categories from "../components/home/Categories";
import FlashSale from "../components/home/FlashSale";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Reviews from "../components/home/Reviews";
import Newsletter from "../components/home/Newsletter";
import Brands from "../components/home/Brands";

export default function Home() {

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero />
      <Categories />
      <FlashSale />
      <TrendingProducts />
      <Brands />
      <WhyChooseUs />
      <Reviews />
      <Newsletter />
    </div>
  );
}