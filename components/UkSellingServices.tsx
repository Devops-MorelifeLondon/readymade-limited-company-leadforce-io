'use client';

import {
  Clock,
  ShieldCheck,
  UserCheck,
  Banknote,
  FileCheck,
  Key,
  ArrowRight,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const services = [
  {
    icon: ShieldCheck,
    title: 'Clean UK Companies (No Liabilities)',
    description:
      'All companies are fully verified, clean, with zero debts, zero loans, and no trading history unless specified.',
  },
  {
    icon: FileCheck,
    title: 'Complete Incorporation Documents',
    description:
      'Includes Certificate of Incorporation, Articles, Share Certificate, UTR, HMRC filings, and authentication code.',
  },
  {
    icon: UserCheck,
    title: 'VAT & Non-VAT Companies Available',
    description:
      'Choose from active VAT-registered companies, non-VAT fresh companies, or companies with history.',
  },
  {
    icon: Clock,
    title: 'Fast Transfer (1–24 Hours)',
    description:
      'Director change, shareholder transfer, and authentication code handover completed within 1–24 hours.',
  },
  {
    icon: Key,
    title: 'Aged Companies (6 Months – 5 Years)',
    description:
      'Boost trust and credibility with aged companies — available with VAT or non-VAT as per your requirement.',
  },
  {
    icon: Banknote,
    title: 'Bank Account & VAT Reactivation Support',
    description:
      'We guide you through reactivating VAT (if required) and assist with UK business bank account setup.',
  },
];

export default function UKCompanyServices() {
  return (
    <section
      className="bg-gray-50 dark:bg-black py-12"
      aria-label="UK Ready-Made Company Services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            UK Ready-Made Companies
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Fast, Secure & Fully Legal UK Companies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Purchase a verified UK Limited Company — VAT, Non-VAT, or aged — with complete documentation and full transfer within 1–24 hours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-700 flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <service.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  {service.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-between">
                  <a
                    href="https://wa.me/447480022706"
                    target="_blank"
                    className="mt-8 self-start font-semibold text-white flex items-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </a>

                  <a
                    href="https://wa.me/447480022706"
                    target="_blank"
                    className="mt-8 self-start font-semibold text-white flex items-center gap-2 group"
                  >
                    <FaWhatsapp className="h-4" />
                    WhatsApp
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
