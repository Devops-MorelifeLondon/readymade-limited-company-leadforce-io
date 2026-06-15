'use client';

import {
  CheckCircle,
  DollarSign,
  FileText,
  Shield,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa6";

const features = [
  {
    icon: Shield,
    title: 'Clean & Verified UK Companies',
    description:
      'All companies are fully checked, debt-free, and verified with HMRC and Companies House.',
  },
  {
    icon: FileText,
    title: 'Complete Documentation Included',
    description:
      'Certificate of Incorporation, UTR, Articles, Share Certificate, Filing Status, and Authentication Code.',
  },
  {
    icon: Clock,
    title: 'Fast Transfer Within 1–24 Hours',
    description:
      'Director and shareholder transfer completed quickly with immediate control handed over.',
  },
  {
    icon: Users,
    title: 'VAT, Non-VAT & Aged Companies',
    description:
      'Choose fresh non-VAT companies, VAT-registered companies, or aged companies from 6 months to 5 years.',
  },
  {
    icon: DollarSign,
    title: 'Transparent & Fair Pricing',
    description:
      'Fixed pricing with no hidden charges — all services clearly explained before purchase.',
  },
  {
    icon: CheckCircle,
    title: 'Trusted by 300+ Global Clients',
    description:
      'International entrepreneurs, agencies, and businesses rely on our verified UK company services.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="bg-white dark:bg-gray-900 py-16 sm:py-14"
      aria-label="Why choose our UK company service"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Verified • Fast • Secure
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Why Choose Our UK Company Service?
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We provide legally compliant, fully documented UK Limited Companies — VAT, Non-VAT, or aged — 
            delivered with transparent pricing, rapid transfer, and complete peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:brightness-110 flex flex-col justify-between"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-blue-100 leading-relaxed">
                    {feature.description}
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
