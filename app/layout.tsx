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
    'Buy a Ready-Made VAT UK Limited Company — Fully Registered & Ready to Trade',
  description:
    'Skip months of incorporation paperwork. Choose from pre-registered UK companies, complete the transfer in days, and start trading under your new company name immediately.',
  keywords:
    'buy UK company, UK VAT registered company for sale, buy UK non VAT company, aged UK companies, UK shelf company, ready made UK company, HMRC verified company, UK company with VAT, buy UK ltd company, UK company transfer',
  openGraph: {
    title:
      'Buy a Ready-Made UK Limited Company — Fully Registered & Ready to Trade',
    description:
      'Skip months of incorporation paperwork. Choose from pre-registered UK companies, complete the transfer in days, and start trading under your new company name immediately.',
    type: 'website',
    locale: 'en_GB',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://uk-vat.lead-force.io',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Buy a Ready-Made UK Limited Company — Fully Registered & Ready to Trade',
    description:
      'Skip months of incorporation paperwork. Choose from pre-registered UK companies, complete the transfer in days, and start trading under your new company name immediately.',
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
              })(window, document, "clarity", "script", "x9f99rd40e");
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
