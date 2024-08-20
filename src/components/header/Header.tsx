import HeaderContact from "./components/HeaderContact";
import HeaderLogo from "./components/HeaderLogo";
import NavBar from "./components/NavBar";

export default function Header() {
  return (
    <div className="fixed w-full">
      <div className="flex justify-between items-center mx-14 h-20">
        <div className="flex gap-8">
          <HeaderLogo />
          <NavBar />
        </div>
        <HeaderContact />
      </div>
    </div>
  );
}
