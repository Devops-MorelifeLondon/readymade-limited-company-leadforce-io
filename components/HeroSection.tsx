'use client';

import { Phone, CheckCircle, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleCallbackClick = () => {
    window.location.href =
      'https://wa.me/447480022706?text=Hi%2C%20I%20want%20to%20buy%20a%20UK%20VAT%20or%20Non-VAT%20Registered%20Company.';
  };

  const features = [
    'VAT & Non-VAT Registered Companies Available',
    'Clean Companies — No Liabilities, No Debts',
    'UTR & Incorporation Documents Ready',
    'Fast Transfer — Within 1 to 24 Hours'
  ];

  return (
    <section
      id="hero"
      className="relative bg-gray-50 dark:bg-black overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-black dark:to-transparent h-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Fast • Secure • Verified
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              Buy UK VAT & Non-VAT Readymade Companies
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              Get ready-made UK Limited Companies with clean history, complete documentation,
              and instant ownership transfer within 1–24 hours.
            </p>

            {/* BULLETS */}
            <div className="mt-8 text-left max-w-md mx-auto lg:mx-0">
              <div className="space-y-3">
                {features.map(feature => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+447480022706"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0000ff] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                Call Now
              </a>

              <button
                onClick={handleCallbackClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-blue-600 bg-transparent border-2 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* RIGHT: JOTFORM */}
          <div id="contact-form" className="w-full h-full lg:mt-0 -mt-8">
            <iframe
              id="JotFormIFrame-252543224958462"
              title="Buy UK Company"
              loading="eager"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/252543224958462"
              className="w-full h-full border-0 rounded-lg"
              style={{ minHeight: '650px' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
