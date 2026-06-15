import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});

export const metadata: Metadata = {
  title:
    'Buy UK VAT & Non-VAT Registered Companies | Fast 1–24 Hour Transfer & Full Documentation',
  description:
    'Purchase clean UK Limited Companies — VAT, Non-VAT, and aged companies (6 months to 5 years). Fast 1–24 hour director/share transfer, full documentation, HMRC verification, and UK bank account support.',
  keywords:
    'buy UK company, UK VAT registered company for sale, buy UK non VAT company, aged UK companies, UK shelf company, ready made UK company, HMRC verified company, UK company with VAT, buy UK ltd company, UK company transfer',
  openGraph: {
    title:
      'Buy UK VAT & Non-VAT Registered Companies | Clean, Verified, Fast Transfer',
    description:
      'Get VAT, Non-VAT or aged UK Limited Companies. Clean, debt-free, fully documented and transferred within 1–24 hours. HMRC & Companies House verified.',
    type: 'website',
    locale: 'en_GB',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://uk-vat.lead-force.io',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Buy UK VAT & Non-VAT Registered Companies | Fast Transfer & Full Docs',
    description:
      'Purchase a verified UK VAT or Non-VAT company with complete documentation and 1–24 hour transfer.',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="icon"
          href="https://www.lead-force.co.uk/assets/images/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="preload"
          as="document"
          href="https://form.jotform.com/252543224958462"
        />

        {/* --------------------------
            MICROSOFT CLARITY ADDED
        --------------------------- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wm7t802jiw");
            `,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-39ZLH2YMNT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-39ZLH2YMNT');
            `,
          }}
        />

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-810525438"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-810525438');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
