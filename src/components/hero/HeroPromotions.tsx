interface Product {
  name: string;
  pic_url: string;
  type: string;
  description: string[];
  price: number;
}

export default function HeroPromotions() {
  const products: Product[] = [
    {
      name: "All Black Camping",
      pic_url: "#",
      type: "Locação e Venda",
      description: ["Aço Galvanizado", "15kg", "15 Pesoas"],
      price: 249.99,
    },
  ];

  return (
    <section className="mt-14 mx-24">
      <h2 className="font-secondary text-4xl">Os mais pedidos</h2>
      <div className="mt-6 grid grid-cols-3">
        {products.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </section>
  );
}
