import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}