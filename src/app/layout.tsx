import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rhea Mendiratta',
  description:
    'Policy researcher and graduate student designing solutions to hard education problems. University of Chicago.',
  openGraph: {
    title: 'Rhea Mendiratta',
    description: 'Policy researcher designing solutions to hard education problems.',
    url: 'https://rheamendiratta.com',
    siteName: 'Rhea Mendiratta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
