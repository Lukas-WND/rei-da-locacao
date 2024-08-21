import Header from "./components/header/Header";
import HeroPromo from "./components/hero/HeroPromo";
import HeroDemands from "./components/hero/HeroDemands";
import HeroSocial from "./components/hero/HeroSocial";
import HeroSuccess from "./components/hero/HeroSuccess";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroPromo />
        <HeroDemands />
        <HeroSocial />
        <HeroSuccess />
        
      </main>
    </>
  );
}

export default App;
