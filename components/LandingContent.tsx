'use client';

import { useState, useMemo, useRef } from 'react';
import {
  Check,
  ChevronDown,
  ArrowRight,
  Search,
  ExternalLink,
  Info
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import GetInTouchForm from './GetInTouch';

interface Company {
  name: string;
  registrationNumber: string;
  incorporationDate: string;
  type?: 'VAT' | 'Non-VAT' | 'Aged';
}

interface LandingContentProps {
  companies: Company[];
}

export default function LandingContent({ companies }: LandingContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pricingSectionRef = useRef<HTMLDivElement>(null);
  const howItWorksSectionRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToHowItWorks = () => {
    howItWorksSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



  const faqs = [
    {
      question: 'Is this legal?',
      answer: 'Yes. Buying and transferring ownership of a UK limited company is entirely legal and a routine process handled through Companies House. We provide all the documentation required for a fully compliant transfer.'
    },
    {
      question: 'How long does the transfer take?',
      answer: 'The transfer is instant. Once you sign the documents, ownership is transferred immediately, allowing you to start trading under your new company name right away.'
    },
    {
      question: 'Can I change the company name?',
      answer: 'Yes, in most cases. We\'ll confirm whether your chosen name is available before you proceed.'
    },
    {
      question: 'Do I get full ownership and control?',
      answer: 'Yes — once the transfer completes, you are the sole director and shareholder (or as specified in your agreement), with full control of the company.'
    },
    {
      question: 'What documents will I receive?',
      answer: 'Certificate of Incorporation, Memorandum & Articles of Association, share certificates, and confirmation of your director/shareholder status from Companies House.'
    },
    {
      question: 'Is VAT registration included?',
      answer: 'Available as an add-on or with our VAT-registered company packages — see pricing above.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-900 font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-slate-50 to-white text-slate-900 border-b border-slate-100">
        {/* Soft Background Grid Line Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.75px,transparent_0.75px),linear-gradient(to_bottom,#e2e8f0_0.75px,transparent_0.75px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-300/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

            {/* RIGHT: JOTFORM IN WINDOW WRAPPER */}
            <div id="contact-form" className="lg:col-span-5 w-full lg:mt-0 mt-8 order-1 lg:order-last">
              <GetInTouchForm />
            </div>

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-first">
              <h1 className="text-4xl sm:text-5xl  font-bold tracking-tight leading-tight text-slate-900">
                Buy a Ready-Made UK Limited Company — Fully Registered & Ready to Trade
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Skip months of incorporation paperwork. Choose from pre-registered UK companies, complete the transfer instantly, and start trading under your new company name immediately.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-[#0000ff] hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-600/15 hover:shadow-blue-600/25 transform hover:-translate-y-0.5"
                >
                  Browse Available Companies →
                </button>
                <button
                  onClick={scrollToHowItWorks}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  See How It Works (30 sec)
                </button>
              </div>

              {/* Trust Strip */}
              <div className="mt-12 pt-8 border-t border-slate-200/80">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Companies House Registered</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Full Documentation Provided</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">UK-Based Support Team</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">Instant Transfer</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-700 font-bold">✓</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">500+ Companies Successfully Transferred</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "WHAT YOU'RE GETTING" SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Is a Ready-Made Company — And What Do You Get?
            </h2>
            <div className="h-1.5 w-24 bg-[#0000ff] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A ready-made (or &ldquo;shelf&rdquo;) company is a UK limited company that has already been incorporated with Companies House — it exists, has a company number, and is ready to be transferred into your name. Instead of waiting 24-48 hours (or longer) for a new incorporation and then months to build a credibility history, you get a company that&apos;s already on record.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-lg p-8 sm:p-10">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Every company we provide includes:</h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Certificate of Incorporation</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Memorandum & Articles of Association</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Companies House registration</span>{' '}
                  <span className="text-slate-500">
                    (you can verify it yourself —{' '}
                    <a
                      href="https://find-and-update.company-information.service.gov.uk"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0000ff] hover:underline inline-flex items-center gap-0.5 font-medium"
                    >
                      link provided <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    )
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Full transfer documentation</span>{' '}
                  <span className="text-slate-500">(share transfer forms, director appointment/resignation forms)</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Registered office service for the first 12 months</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Support completing your transfer with Companies House and HMRC</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section ref={howItWorksSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              How It Works — 4 Simple Steps
            </h2>
            <div className="h-1.5 w-24 bg-[#0000ff] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 items-start">
              <span className="w-8 h-8 rounded-lg bg-[#0000ff] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Browse & Choose</h4>
                <p className="text-sm text-slate-600 mt-1">Pick a ready-made company from our available list (by age, name, or industry classification).</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 items-start">
              <span className="w-8 h-8 rounded-lg bg-[#0000ff] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Verify</h4>
                <p className="text-sm text-slate-600 mt-1">Check the company&apos;s details directly on Companies House before you commit.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 items-start">
              <span className="w-8 h-8 rounded-lg bg-[#0000ff] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Transfer</h4>
                <p className="text-sm text-slate-600 mt-1">We handle the share transfer and director changes; you sign the documents we provide.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 items-start">
              <span className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Trade</h4>
                <p className="text-sm text-slate-600 mt-1">The transfer is instant. Once signed, the company is immediately yours to operate and start trading.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white bg-[#0000ff] hover:bg-blue-600 transition shadow-md hover:shadow-lg"
            >
              Start Step 1 — View Companies →
            </button>
          </div>
        </div>
      </section>


      {/* 4. PRICING SECTION */}
      <section ref={pricingSectionRef} id="pricing" className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <div className="h-1.5 w-24 bg-[#0000ff] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              No hidden fees. Every package includes registered office, documents, and support for 12 months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Standard Package */}
            <div className="rounded-2xl border border-slate-200 shadow-md p-8 flex flex-col justify-between bg-white transform hover:-translate-y-1 transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Standard Ready-Made Company</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-950 blur-md">£249</span>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-semibold text-slate-950 text-sm mb-4">What&apos;s Included:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Incorporation documents, share transfer, director changes, Companies House filing
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/447480022706?text=Hi%2C%20I%20am%20interested%20in%20the%20Standard%20Ready-Made%20Company%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm transition shadow-sm hover:shadow-md hover:scale-[1.02] duration-200 active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Aged Package */}
            <div className="rounded-2xl border-2 border-[#0000ff] shadow-lg p-8 flex flex-col justify-between bg-white transform hover:-translate-y-1 transition duration-300 relative">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Aged Company (12+ months)</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-950 blur-md">£499</span>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-semibold text-slate-950 text-sm mb-4">What&apos;s Included:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Everything above + established incorporation date
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/447480022706?text=Hi%2C%20I%20am%20interested%20in%20the%20Aged%20Company%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm transition shadow-sm hover:shadow-md hover:scale-[1.02] duration-200 active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* VAT Registered Package */}
            <div className="rounded-2xl border border-slate-200 shadow-md p-8 flex flex-col justify-between bg-white transform hover:-translate-y-1 transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">VAT-Registered Company</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-slate-950 blur-md">£999</span>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-semibold text-slate-950 text-sm mb-4">What&apos;s Included:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Everything above + active VAT registration
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/447480022706?text=Hi%2C%20I%20am%20interested%20in%20the%20VAT-Registered%20Company%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm transition shadow-sm hover:shadow-md hover:scale-[1.02] duration-200 active:scale-[0.98]"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS FOR */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Buy a Ready-Made Company?
            </h2>
            <div className="h-1.5 w-24 bg-[#0000ff] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/60 p-8 sm:p-10 shadow-sm">
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Need to start trading immediately</span>
                  <span className="text-slate-600"> — bid on contracts, open accounts, or sign agreements that require an existing company.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Want an established incorporation date</span>
                  <span className="text-slate-600"> — some tenders, banking applications, and credit checks favour companies with trading history.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Avoid incorporation delays</span>
                  <span className="text-slate-600"> — skip the registration queue entirely.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
                <div>
                  <span className="font-semibold text-slate-900">Buying for a client or as part of a corporate restructure</span>
                  <span className="text-slate-600"> — bulk and ongoing arrangements available.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">
              Frequently Asked Questions
            </h2>
            <div className="h-1.5 w-24 bg-[#0000ff] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50/50 text-left font-semibold text-slate-900 focus:outline-none transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''
                      }`} />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'
                    }`}>
                    <p className="p-5 text-slate-600 leading-relaxed text-sm bg-slate-50/30">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,0,255,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Browse our current list of available ready-made UK companies, or contact our team directly for a recommendation based on your needs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#0000ff] hover:bg-blue-600 text-white font-bold rounded-xl transition shadow-lg"
            >
              Browse Available Companies
            </button>
            <a
              href="https://wa.me/447480022706"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl transition gap-2 shadow-sm hover:shadow-md hover:scale-[1.02] duration-200 active:scale-[0.98]"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
