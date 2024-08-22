export default function FooterSocial() {
  return (
    <div className="mt-4 mx-8 flex justify-between text-[#828282]">
      <div className="flex gap-2 items-center">
        <img src="/footer/insta_svg.svg" alt="ig_svg" />
        <p className="text-lg">Instagram</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/footer/face_svg.svg" alt="fb_svg" />
        <p className="text-lg">Facebook</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/footer/tiktok_svg.svg" alt="tk_svg" />
        <p className="text-lg">TikTok</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/footer/youtube_svg.svg" alt="yt_svg" />
        <p className="text-lg">Youtube</p>
      </div>
    </div>
  );
}
