export default function HeroPartners() {
  return (
    <section className="w-full mt-28">
      <div className="w-full px-24">
        <h1 className="text-center text-5xl">Quem confia em nosso trabalho</h1>
        <div className="my-20 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-24 items-center justify-items-center">
          <div>
            <img src="/partners/bradesco_logo.png" alt="bradesco_logo" />
          </div>
          <div>
            <img src="/partners/logo_ambev.png" alt="ambev_logo" />
          </div>
          <div>
            <img src="/partners/sidia-logo.png" alt="sidia_logo" />
          </div>
          <div>
            <img src="/partners/lg_logo.png" alt="lg_logo" />
          </div>
          <div>
            <img src="/partners/honda_logo.png" alt="honda_logo" className="h-full"/>
          </div>
        </div>
      </div>
    </section>
  );
}
