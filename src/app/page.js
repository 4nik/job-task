import Navbar from "../components/Navbar";
import Hero from "../components/landing/Hero";
import ProductHighlights from "../components/landing/ProductHighlights";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductHighlights />
      </main>
      <Footer />
    </div>
  );
}
