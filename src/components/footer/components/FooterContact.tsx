export default function FooterContact() {
  return (
    <div className="w-full mt-10 grid grid-cols-2 items-center gap-16">
      <div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p className="text-2xl">Telefone</p>
        </div>
        <div className="mt-2 ml-10 font-secondary">
          <span className="text-sm">092</span>
          <span className="ml-1 text-lg">99179-4867</span>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
          <p className="text-2xl">WhatsApp</p>
        </div>
        <div className="mt-2 ml-10 font-secondary">
          <span className="text-sm">092</span>
          <span className="ml-1 text-lg">99342-6556</span>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="text-2xl">Endereço</p>
        </div>
        <div className="mt-2 ml-10 font-secondary">
          <p className="text-lg">Rua Goiânia, 14, Planalto</p>
          <p className="text-sm">Manaus - AM</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-calendar-clock"
          >
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h5" />
            <path d="M17.5 17.5 16 16.3V14" />
            <circle cx="16" cy="16" r="6" />
          </svg>
          <p className="text-2xl">Horário de Funcionamento</p>
        </div>
        <div className="mt-2 ml-10 font-secondary">
          <span className="flex justify-between">
            <p>Segunda - Sexta</p> <p className="font-semibold font-primary text-lg">08h30-18h30</p>
          </span>
          <span className="flex justify-between">
            <p>Sábados</p> <p className="font-semibold font-primary text-lg">09h00-14h30</p>
          </span>
        </div>
      </div>
    </div>
  );
}
