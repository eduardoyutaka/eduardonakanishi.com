export default function Hire() {
  return (
    <main>
      <header className="my-10">
        <h1 className="text-5xl">
          Agende uma aula particular de programação
        </h1>
      </header>
      <section className="py-2">
        <ul className="list-disc list-inside space-y-2">
          <li>
            A primeira aula é gratuita! 💸
          </li>
          <li>
            Didática e conteúdo personalizados 📚
          </li>
          <li>
            Duração de 1h por aula 🕒
          </li>
          <li>
            Horário das aulas das 08:00h às 17:00h 📅
          </li>
        </ul>
      </section>
      <section className="py-2">
        <p>Entre em contato: </p>
        <address>
          <a
            href="mailto:eduardo.nakanishi@gmail.com"
            className="underline underline-offset-4 text-blue-500 hover:text-blue-700"
          >
            eduardo.nakansihi@gmail.com
          </a>
        </address>
      </section>
    </main>
  );
}
