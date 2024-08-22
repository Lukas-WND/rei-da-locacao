import TestemonialCard from "./components/TestemonialCard";

export interface Testemonial {
  url_img: string;
  utl_alt: string;
  testemonial: string;
  stars_amount: number;
}

export default function HeroTestemonials() {
  const testemonials: Testemonial[] = [
    {
      url_img: "/testemonials/client_1.jpg",
      utl_alt: "client_1_img",
      testemonial:
        "Gostei, muito bem embalada pela fábrica, fácil de montar e ótimo acabamento!",
      stars_amount: 5,
    },
    {
      url_img: "/testemonials/client_2.jpg",
      utl_alt: "client_2_img",
      testemonial:
        "Tenda muito forte e resistente. Foi montada há um ano e nenhum sinal de dano ou desgaste até agora. Material forte e resistente. Alta, pesada e espaçosa! Muito boa!",
      stars_amount: 5,
    },
    {
      url_img: "/testemonials/client_3.jpg",
      utl_alt: "client_3_img",
      testemonial: "Ótimo produto, 100% de qualidade. Eu recomendo!",
      stars_amount: 5,
    },
  ];
  return (
    <section className="w-full mt-20">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <h1 className="text-custom-blue text-5xl">Ainda tem Dúvida?</h1>
        <p className="text-2xl font-secondary">
          Nossos clientes comprovam a qualidade de nossos produtos
        </p>
      </div>
      <div className="my-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 justify-items-center mx-24">
        {testemonials.map((testemonial, idx) => (
          <TestemonialCard testemonial={testemonial} key={idx} />
        ))}
      </div>
    </section>
  );
}
