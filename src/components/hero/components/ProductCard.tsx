import { Product } from "../HeroPromotions";

export default function ProductCard({ prod }: { prod: Product }) {
  return (
    <div className="w-[357px]">
      <div className="w-full">
        {prod.promo && (
          <p className="absolute text-custom-blue text-2xl ml-1">Promoção</p>
        )}
        <img src={prod.pic_url} alt={prod.pic_alt} />
      </div>
      <div>
        <p className="text-xl text-custom-blue">{prod.type}</p>
        <div className="w-full">
          <p className="text-justify text-4xl">{prod.name}</p>
          <div className="flex justify-between font-secondary font-light">
            {prod.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </div>
        <div className="flex w-full mt-4">
          {prod.old_price && (
            <div className="flex items-end">
              <p className="self-end">R$</p>
              <p className="ml-1 text-xl self-end line-through text-red-500">
                {prod.old_price}
              </p>
              <p className="mx-4 text-3xl">Por</p>
            </div>
          )}
          <div className="flex w-full">
            <p className="self-end mb-1 text-xl">R$</p>
            <p className={`ml-1 text-3xl ${prod.old_price && 'text-emerald-500'}`}>{prod.cur_price}</p>
            <p className="ml-2 text-custom-blue">Locação</p>
          </div>
        </div>
      </div>
    </div>
  );
}
