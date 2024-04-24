import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { SiBookstack } from 'react-icons/si';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookSummery Hub',
  description: 'BookSummery Hub'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="p-1" data-theme="cupcake" lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <Link href="/" className="btn btn-ghost text-xl">
            BookSummery Hub <SiBookstack />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
