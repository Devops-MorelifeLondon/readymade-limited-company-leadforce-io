'use client';

import { ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Buying a VAT-registered UK company was unbelievably smooth. Documents were shared instantly and transfer completed same day.',
    author: 'J. K., E-commerce Entrepreneur',
  },
  {
    quote:
      "Extremely professional. They provided a clean non-VAT company with all incorporation papers. Perfect for launching my UK operations.",
    author: 'M. T., Agency Owner',
  },
  {
    quote:
      'We purchased a 2-year aged company. Everything was accurate — filings, UTR, share certificate. Highly trustworthy team.',
    author: 'Daniel P., International Business Partner',
  },
];

const faqs = [
  {
    question: 'Is it legal to buy a UK registered company?',
    answer:
      'Yes. Buying and transferring a UK Limited Company is fully legal under Companies House rules.',
  },
  {
    question: 'How fast is the company transfer?',
    answer:
      'Most transfers are completed within 1–24 hours including director change, shareholder update, and authentication code handover.',
  },
  {
    question: 'Are the companies clean?',
    answer:
      'Yes. All companies are debt-free, have no liabilities, no loans, and clean filing history unless specified.',
  },
  {
    question: 'What documents will I receive?',
    answer:
      'You receive Certificate of Incorporation, UTR, Articles, Share Certificate, Confirmation Statement, HMRC filings, and authentication code.',
  },
  {
    question: 'Do you offer VAT-registered companies?',
    answer:
      'Yes. We provide active VAT companies with clean records and HMRC-approved VAT status.',
  },
  {
    question: 'Can I buy an aged company?',
    answer:
      'Yes. Aged companies with 6 months to 5 years history are available — ideal for credibility and contracts.',
  },
  {
    question: 'Do you help with UK bank account opening?',
    answer:
      'Yes. We guide you through the UK business bank account setup process after the company transfer.',
  },
  {
    question: 'Can foreign nationals buy a UK company?',
    answer:
      'Absolutely. Anyone from any country can legally own a UK Limited Company as director or shareholder.',
  },
];

export default function TestimonialsAndFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-12" aria-label="Testimonials and FAQs">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="font-semibold text-primary uppercase tracking-wider animate-pulse-slow">
            Real Results
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight animate-fade-in-up">
            From Real Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gradient-primary flex flex-col flex-1 justify-around text-white p-6 shadow-xl card-hover animate-fade-in-up animate-delay-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#EFBF04"
                    className="w-5 h-5 text-[#EFBF04] mr-1"
                  />
                ))}
              </div>
              <p className="italic text-blue-100 mb-4">"{t.quote}"</p>
              <p className="font-semibold text-white">{t.author}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="font-semibold text-primary uppercase tracking-wider text-center animate-pulse-slow">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center animate-fade-in-up">
            Got Questions? We Have Answers
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-md overflow-hidden shadow-lg card-hover animate-fade-in-up animate-delay-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="p-5 pt-2 text-black border-t border-primary">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
