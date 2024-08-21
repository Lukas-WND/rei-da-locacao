import ProductCard from "./components/ProductCard";

export interface Product {
  name: string;
  pic_url: string;
  pic_alt: string;
  type: string;
  description: string[];
  cur_price: string;
  old_price?: string;
  promo: boolean;
}

export default function HeroPromotions() {
  const products: Product[] = [
    {
      name: "All Black Camping - 3x3",
      pic_url: "/products/all_black_camping_3x3.png",
      pic_alt: "tent_3x3_black",
      type: "Locação e Venda",
      description: ["Aço Galvanizado", "20kg", "15 Pesoas"],
      cur_price: "249,99",
      old_price: "299,99",
      promo: true,
    },
    {
      name: "Climatizador Portátil",
      pic_url: "/products/portable_ac.png",
      pic_alt: "portable_air_conditioner",
      type: "Locação",
      description: ["Ar umidificado", "60L", "110V"],
      cur_price: "259,99",
      promo: false,
    },
    {
      name: "2 Climatizadores Joape 220V",
      pic_url: "/products/double_ac.png",
      pic_alt: "double_joape_air_conditioner",
      type: "Locação",
      description: ["Ar umidificado", "80L", "40kg"],
      cur_price: "419,99",
      old_price: "500,00",
      promo: true,
    },
    {
      name: "Climatizador Joape 220V",
      pic_url: "/products/single_ac.png",
      pic_alt: "double_joape_air_conditioner",
      type: "Locação",
      description: ["Ar umidificado", "80L", "40kg"],
      cur_price: "249,99",
      promo: false,
    },
    {
      name: "Climatizador Torre 2 em 1",
      pic_url: "/products/tower_ac.png",
      pic_alt: "tower_air_conditioner",
      type: "Locação",
      description: ["Ar umidificado", "80L", "220v"],
      cur_price: "269,90",
      promo: false,
    },
    {
      name: "Blue Camping 3x3",
      pic_url: "/products/tent_3x3_blue.png",
      pic_alt: "tent_3x3_blue",
      type: "Locação e Venda",
      description: ["Aço Galvanizado", "15kg", "15 Pesoas"],
      cur_price: "249,90",
      old_price: "480,00",
      promo: true,
    },
    {
      name: "White Camping 10x10",
      pic_url: "/products/white_camping_10x10.png",
      pic_alt: "tent_10x10_white",
      type: "Locação e Venda",
      description: ["Ferro Reforçado", "350kg"],
      cur_price: "799,99",
      promo: false,
    },
    {
      name: "Gray Camping 4x4",
      pic_url: "/products/gray_camping_4x4.png",
      pic_alt: "tent_4x4_gray",
      type: "Locação e Venda",
      description: ["Ferro Reforçado", "100kg"],
      cur_price: "349,99",
      promo: false,
    },
    {
      name: "Lona Branca 5x5",
      pic_url: "/products/canvas_6x6.png",
      pic_alt: "tent_5x5_canvas",
      type: "Locação e Venda",
      description: ["Ferro Reforçado", "120kg"],
      cur_price: "449,99",
      promo: false,
    },
  ];

  return (
    <section className="mt-20 mx-24">
      <h2 className="font-secondary text-5xl">Os mais pedidos</h2>
      <div className="my-20 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-24 items-center justify-items-center">
        {products.map((item, idx) => (
          <ProductCard prod={item} key={idx} />
        ))}
      </div>
    </section>
  );
}
