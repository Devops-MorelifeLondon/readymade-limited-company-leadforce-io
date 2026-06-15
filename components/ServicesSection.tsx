'use client';

import {
  UploadCloud,
  FileText,
  ShieldCheck,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const services = [
  {
    icon: UploadCloud,
    title: 'Choose Your Company',
    description:
      'Select from VAT-registered companies, Non-VAT fresh companies, or aged companies (6 months to 5 years).',
  },
  {
    icon: FileText,
    title: 'We Share All Documents',
    description:
      'You receive incorporation docs, UTR, Articles, Share Certificate, VAT certificate (if applicable), and filings.',
  },
  {
    icon: ShieldCheck,
    title: 'HMRC & Companies House Verified',
    description:
      'Every company is clean with no debts, no liabilities, and verified status from HMRC and Companies House.',
  },
  {
    icon: CheckCircle,
    title: 'Fast Transfer in 1–24 Hours',
    description:
      'We complete director change, share transfer, and authentication code handover quickly and securely.',
  },
  {
    icon: Globe,
    title: 'Support for VAT Reactivation',
    description:
      'If you purchase a VAT company, we assist with VAT reactivation and business bank account setup.',
  },
  {
    icon: ShieldCheck,
    title: 'Aged Companies Available',
    description:
      'Companies with 6 months to 5 years history available — ideal for credibility, contracts, and tenders.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-50 dark:bg-black py-16"
      aria-label="UK Company Services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Complete UK Company Setup & Transfer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Buy a verified UK company with complete documentation, clean history, and fast transfer — VAT, Non-VAT, or aged companies available.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.title}
              className="group relative bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-700"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm text-blue-100">
                  {service.description}
                </p>

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
