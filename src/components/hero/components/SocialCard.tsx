import { Social } from "../HeroSocial";

export default function SocialCard({ social }: { social: Social }) {
  return (
    <a href={social.href} target="_blank" className="w-[480px] h-[352px] relative transition-transform duration-300 hover:scale-105">
      <img
        src={social.img_url}
        alt={social.img_alt}
        className="w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="flex items-center gap-2 absolute bottom-4 left-4 text-white">
        <img src={social.icon_url} alt={social.icon_alt} />
        <p className="font-secondary">{social.username}</p>
      </div>
    </a>
  );
}
