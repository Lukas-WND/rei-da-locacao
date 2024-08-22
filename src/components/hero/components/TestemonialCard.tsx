import { Testemonial } from "../HeroTestemonials";

export default function TestemonialCard({
  testemonial,
}: {
  testemonial: Testemonial;
}) {
  return (
    <div className="flex flex-col items-center gap-5 h-full">
      <div className="h-1/2">
        <div className="w-40 h-40 rounded-full overflow-hidden relative bg-slate-600 border border-amber-500">
          <img
            src={testemonial.url_img}
            alt={testemonial.utl_alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-8 h-1/2 flex flex-col gap-4 items-center justify-between">
        <p className="font-secondary text-lg">{testemonial.testemonial}</p>
        <div className="flex text-amber-500">
          {Array.from({ length: testemonial.stars_amount }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
