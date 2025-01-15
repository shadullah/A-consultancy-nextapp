import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Contact />
    </>
  );
}
