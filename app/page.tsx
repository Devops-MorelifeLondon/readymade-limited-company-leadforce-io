import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingContent from '@/components/LandingContent';
import { FaWhatsapp } from 'react-icons/fa6';

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
    canonical: process.env.NEXT_PUBLIC_BASE_URL
  },
};

export default function Home() {
  const vatCompanies = [
    // Original VAT companies
    { name: "C. A. P. EXPRESS LIMITED", registrationNumber: "15711307", incorporationDate: "09-05-2024" },
    { name: "AMANANY LIMITED", registrationNumber: "14693891", incorporationDate: "28-02-2023" },
    { name: "OCHRE INVEST II LTD", registrationNumber: "15720163", incorporationDate: "14-05-2024" },
    { name: "GREENER GRASS DAYS LTD", registrationNumber: "15720047", incorporationDate: "14-05-2024" },
    { name: "ONYX LETTINGS & PROPERTY MANAGEMENT LIMITED", registrationNumber: "14833944", incorporationDate: "28-04-2023" },
    { name: "FOX ON RAMSTREET LTD", registrationNumber: "14818053", incorporationDate: "20-04-2023" },
    { name: "OPUZ PROPERTY LTD", registrationNumber: "15720225", incorporationDate: "14-05-2024" },
    { name: "KING GROUP ENTERPRISES LIMITED", registrationNumber: "14722173", incorporationDate: "10-03-2023" },
    { name: "RUBAYS LTD", registrationNumber: "15699685", incorporationDate: "01-05-2024" },
    { name: "TEMPLEGATE PROPERTY AND INVESTMENTS LTD", registrationNumber: "14840318", incorporationDate: "02-05-2023" },

    // Companies from image
    { name: "Aegis Company Management Ltd", registrationNumber: "16178698", incorporationDate: "13/01/2025" },
    { name: "Ashford Company Management Ltd", registrationNumber: "16179041", incorporationDate: "13/01/2025" },
    { name: "Atlas Company Management Ltd", registrationNumber: "16179460", incorporationDate: "13/01/2025" },
    { name: "Canterbury Company Management Ltd", registrationNumber: "16179054", incorporationDate: "13/01/2025" },
    { name: "Crest Company Management Ltd", registrationNumber: "16179100", incorporationDate: "13/01/2025" },
    { name: "Elmwood Company Management Ltd", registrationNumber: "16178990", incorporationDate: "13/01/2025" },
    { name: "Greenwich Company Management Ltd", registrationNumber: "16178589", incorporationDate: "13/01/2025" },
    { name: "Haven Company Management Ltd", registrationNumber: "16178891", incorporationDate: "13/01/2025" },
    { name: "Heritage Company Management Ltd", registrationNumber: "16178624", incorporationDate: "13/01/2025" },
    { name: "Horizon Company Management Ltd", registrationNumber: "16178777", incorporationDate: "13/01/2025" },
    { name: "Imperial Company Management Ltd", registrationNumber: "16179383", incorporationDate: "13/01/2025" },
    { name: "International Company Management Ltd", registrationNumber: "16179006", incorporationDate: "13/01/2025" },
    { name: "Ironbridge Company Management Ltd", registrationNumber: "16179052", incorporationDate: "13/01/2025" },
    { name: "Pendragon Company Management Ltd", registrationNumber: "16179052", incorporationDate: "13/01/2025" },
    { name: "Pioneer Company Management Ltd", registrationNumber: "16178669", incorporationDate: "13/01/2025" },
    { name: "Regal Company Management Ltd", registrationNumber: "16178772", incorporationDate: "13/01/2025" },
    { name: "Sovereign Company Management Ltd", registrationNumber: "16179067", incorporationDate: "13/01/2025" },
    { name: "Voyager Company Management Ltd", registrationNumber: "16179114", incorporationDate: "13/01/2025" },
    { name: "Whitehall Company Management Ltd", registrationNumber: "16178702", incorporationDate: "13/01/2025" },
    { name: "Northbridge Company Management Ltd", registrationNumber: "16178967", incorporationDate: "13/01/2025" },
    { name: "Regency Company Management Ltd", registrationNumber: "16179094", incorporationDate: "13/01/2025" },
    { name: "Riverside Company Management Ltd", registrationNumber: "16178595", incorporationDate: "13/01/2025" },
    { name: "Sapphire Company Management Ltd", registrationNumber: "16178951", incorporationDate: "13/01/2025" },
    { name: "Yorkshire Company Management Ltd", registrationNumber: "16179030", incorporationDate: "13/01/2025" },
  ];

  return (
    <>
      <main role="main">
        <Header />
        
        <LandingContent companies={vatCompanies} />
        
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/447480022706"
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 fixed bottom-4 right-2 md:right-4 text-sm flex items-center gap-2 bg-[#18d96c] hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-lg transition"
        >
          <FaWhatsapp className='text-[20px]' />
          Chat on WhatsApp
        </a>
      </main>
    </>
  );
}
