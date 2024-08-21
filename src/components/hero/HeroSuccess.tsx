import ReactPlayer from "react-player";

export default function HeroSuccess() {
  return (
    <section className="w-full mt-20 bg-[#E9E7E7]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-56 py-10 gap-24 justify-items-center items-center">
        <div>
          <h2 className="text-6xl text-custom-blue">
            Somos a Garantia <br /> de Sucesso para <br /> o seu Evento
          </h2>
          <div className="font-secondary italic flex flex-col gap-5 mt-6 text-xl mr-24">
            <span>
              Há 2 anos no mercado, nossa missão é oferecer soluções que atendam
              perfeitamente às suas necessidades!{" "}
            </span>
            <span>
              Com excelência, elegância e segurança, nossas tendas estão
              presentes em diversos eventos: festas, feiras ao ar livre,
              exposições, campings, workshops, casamentos, confraternizações e
              qualquer ocasião que exija coberturas de qualidade.
            </span>
          </div>
        </div>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sG3hXa1Kb8w"
          />
        </div>
      </div>
    </section>
  );
}
