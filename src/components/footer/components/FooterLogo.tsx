export default function FooterLogo() {
  return (
    <div className="flex gap-4 h-16 items-center">
      <h1 className="text-4xl text-white">Rei da Locação</h1>
      <div className="h-16">
        <img
          src="/secondary-logo.png"
          alt="header_logo"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
