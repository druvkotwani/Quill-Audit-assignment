import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/herobg.png')]">

        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </>
  );
}
