import { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import SecondaryNavbar from "../components/SecondaryNavbar/SecondaryNavbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import CategorySection from "../components/CategorySection/CategorySection.jsx";
import ProductSection from "../components/ProductSection/ProductSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
         />
      <SecondaryNavbar />
      <Hero />

      <CategorySection />

      <ProductSection  searchTerm={searchTerm} />

      <Footer />
    </>
  );
}

export default Home;