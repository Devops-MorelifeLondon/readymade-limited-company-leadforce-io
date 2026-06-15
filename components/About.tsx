'use client';

import { ArrowRight, Check } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    'Clean UK Companies — No liabilities, no debts',
    'VAT & Non-VAT Registered Companies Available',
    'Full documentation & 1–24 hour transfer',
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12" aria-label="About UK Company Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="text-left">
            <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Fast • Secure • Fully Verified
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Buy UK VAT & Non-VAT Registered Companies
            </h2>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We provide ready-made UK Limited Companies with clean history, complete documentation, and 
              instant transfer. Whether you need a VAT-registered company, a non-VAT fresh company, or an aged 
              company for credibility — we deliver fully compliant and HMRC-verified businesses.
            </p>

            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              All companies come with incorporation docs, UTR, filings, share certificate, and authentication 
              code. Transfer is completed within 1–24 hours along with full guidance on VAT reactivation and UK 
              bank account support.
            </p>

            {/* Benefits List */}
            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0000ff] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                View Available Companies
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-96 lg:h-full w-full">
            <div className="h-full w-full rounded-2xl overflow-hidden ">
              <img 
                src="/banner.png"
                alt="UK company documents and business registration team"
                className="w-full h-full object-contain"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0000ff]/30 to-transparent"></div> */}
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0000ff] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-300 rounded-full opacity-20 blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
