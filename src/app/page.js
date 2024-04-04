import { Header } from "@/components/Header";
import { HeroSection } from "./_components/HeroSection";
import { Projects } from "./_components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className=" flex flex-col container">
      <Header />
      <HeroSection />
      <Projects />
      <Footer />
    </main>
  );
}
