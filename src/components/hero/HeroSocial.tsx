import SocialCard from "./components/SocialCard";

export interface Social {
  href: string;
  img_url: string;
  img_alt: string;
  icon_url: string;
  icon_alt: string;
  username: string;
}

export default function HeroSocial() {
  const socialMedia: Social[] = [
    {
      href: "https://www.instagram.com/rei_da_locacao.am?igsh=cWFwODVhbzNnMjF1",
      img_url: "/social/pic_insta.png",
      img_alt: "pic_insta",
      icon_url: "/social/ig.svg",
      icon_alt: "ig_svg",
      username: "@rei.da.locacao.am",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100090058084141",
      img_url: "/social/pic_facebook.png",
      img_alt: "pic_facebook",
      icon_url: "/social/fb.svg",
      icon_alt: "fb_svg",
      username: "Rei da Locação",
    },
    {
      href: "https://www.tiktok.com/@rei.da.locacao_am?_t=8p44gqkMt8A&_r=1",
      img_url: "/social/pic_tiktok.png",
      img_alt: "pic_tiktok",
      icon_url: "/social/tk.svg",
      icon_alt: "ttk_svg",
      username: "@rei.da.locacao_am",
    },
  ];
  return (
    <section className="my-20 mx-24">
      <div>
        <h2 className="font-secondary text-5xl">
          Fique por dentro das novidades
        </h2>
        <p className="mt-4 text-2xl text-custom-blue">
          Acompanhe nossas redes sociais!
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 items-center justify-items-center">
        {socialMedia.map((item, idx) => (
          <SocialCard social={item} key={idx} />
        ))}
      </div>
    </section>
  );
}
