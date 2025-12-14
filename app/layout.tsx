import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'River ERP | Modern ERP on ERPNext',
  description:
    'River ERP is a streamlined ERP implementation on ERPNext with guided setup, transparent pricing, and a single CTA to book via Calendly.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
