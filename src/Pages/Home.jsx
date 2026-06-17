import Navbar from "../components/Navbar/Navbar.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import CategorySection from "../components/CategorySection/CategorySection.jsx";
import ProductSection from "../components/ProductSection/ProductSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Hero />

      <CategorySection />

      <ProductSection />

      <Footer />
    </>
  );
}

export default Home;