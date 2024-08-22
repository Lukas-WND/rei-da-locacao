import Header from "./components/header/Header";
import HeroPromo from "./components/hero/HeroPromo";
import HeroDemands from "./components/hero/HeroDemands";
import HeroSocial from "./components/hero/HeroSocial";
import HeroSuccess from "./components/hero/HeroSuccess";
import HeroTestemonials from "./components/hero/HeroTestemonials";
import HeroPartners from "./components/hero/HeroPartners";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroPromo />
        <HeroDemands />
        <HeroSocial />
        <HeroSuccess />
        <HeroTestemonials />
        <HeroPartners />
      </main>
      <Footer />
    </>
  );
}

export default App;
