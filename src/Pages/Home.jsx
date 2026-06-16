import Navbar from "../components/Navbar/Navbar.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import ProductSection from "../components/ProductSection/ProductSection.jsx";
import CategorySection from "../components/CategorySection/CategorySection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
       <SecondaryNavbar />
      <Hero/>
         <ProductSection />
         <CategorySection />
          <Footer />
       
    </>
  );
}

export default Home;