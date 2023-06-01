import Link from 'next/link';
import Image from 'next/image';
import me from '../../public/images/me.jpg';

export default function Home() {
  return (
    <main>
      <section className="py-2">
        <Image src={me} alt="autor" width={200} height={200} quality={100} />
        <p className="my-4">
          Meu nome é Eduardo e eu sou um desenvolvedor de software desde 2016.
          No momento estou estudando <a href="https://en.wikipedia.org/wiki/Competitive_programming" className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500" >programação competitiva</a> e ofereço aulas particulares de programação para todos os níveis.
        </p>
      </section>
      <section className="py-2">
        <Link
          href="/hire"
          className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500">
          Gostaria de agendar uma aula particular?
        </Link>
      </section>
      <section className="py-2">
        <h1 className="my-4">Minhas redes sociais:</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://instagram.com/edu.nakanishi"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com/@yutiktaka"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500"
              target="_blank"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/eduardo-yutaka-nakanishi-35a003124"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/falayutaka"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-700 visited:text-purple-500"
              target="_blank"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
