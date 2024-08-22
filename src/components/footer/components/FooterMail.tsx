export default function FooterMail() {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <p className="text-2xl">Fique por dentro das novidades</p>
      </div>
      <div className="mt-2 w-full flex gap-4 h-8">
        <input
          type="email"
          className="w-full px-2 rounded-sm text-sm text-black font-secondary"
          placeholder="Informe seu melhor e-mail..."
        />
        <button className="bg-custom-blue py-1 h-full w-36 text-center rounded-sm">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
