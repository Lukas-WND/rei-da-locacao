import FooterContact from "./components/FooterContact";
import FooterDevs from "./components/FooterDevs";
import FooterLogo from "./components/FooterLogo";
import FooterMail from "./components/FooterMail";
import FooterMap from "./components/FooterMap";
import FooterSocial from "./components/FooterSocial";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black">
      <div className="mx-24 pt-16 pb-4 text-white flex gap-96">
        <div className="w-72">
          <FooterLogo />
          <FooterMap />
          <FooterDevs />
        </div>
        <div className="w-1/2">
          <FooterMail />
          <FooterContact />
          <hr className="mt-10"/>
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}
