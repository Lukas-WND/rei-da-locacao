import Header from "./components/header/Header";
import HeroPromo from "./components/hero/HeroPromo";
import HeroPromotions from "./components/hero/HeroPromotions";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroPromo />
        <HeroPromotions />
      </main>
    </>
  );
}

export default App;
