import './globals.css';
import { Noto_Serif } from 'next/font/google';
import Link from 'next/link';

const inter = Noto_Serif({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Home | Eduardo Yutaka Nakanishi',
  description: 'Website pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} max-w-2xl mx-auto px-5 leading-relaxed`}>
        <nav className="h-16">
          <ul className="flex py-4 border-b-2 border-gray-50">
            <li>
              <Link href="/">Eduardo Yutaka Nakanishi</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
