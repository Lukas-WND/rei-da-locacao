import HeaderContact from "./components/HeaderContact";
import HeaderLogo from "./components/HeaderLogo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <header className="fixed w-full bg-custom-bg">
      <div className="flex justify-between items-center mx-14 h-20">
        <div className="flex gap-8">
          <HeaderLogo />
          <NavBar />
        </div>
        <HeaderContact />
      </div>
    </header>
  );
}
