'use client';

import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';

export default function FeaturedInSection() {
  const newsQuotes = [
    // Replace with your actual data
    {
      logo: '/images/news-logos/logo-tech-chronicle.svg',
      quote: 'Leadforce is transforming the landscape for UK company formation.',
      link: '#'
    },
    {
      logo: '/images/news-logos/logo-finance-today.svg',
      quote: 'A trusted partner for thousands of international clients seeking privacy.',
      link: '#'
    },
    {
      logo: '/images/news-logos/logo-business-weekly.svg',
      quote: 'Their combination of local expertise and seamless service is unmatched.',
      link: '#'
    },
    {
      logo: '/images/news-logos/logo-fintech-focus.svg',
      quote: 'Helping global startups thrive with their nominee director services.',
      link: '#'
    },
    {
      logo: '/images/news-logos/logo-global-entrepreneur.svg',
      quote: 'A key player in the future of UK company formation for a global workforce.',
      link: '#'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24" aria-label="As Featured In">
       
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Industry Recognition
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            As Featured In
          </h2>
        </div>
        
        <div className="mt-12">
          <Slider {...settings}>
            {newsQuotes.map((item, index) => (
              <div key={index} className="px-3 py-4">
                <div className="h-full bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="flex-shrink-0 h-10 mb-4">
                    <img src={item.logo} alt="News Source Logo" className="h-full w-auto object-contain" />
                  </div>
                  <blockquote className="flex-grow text-gray-700 dark:text-gray-300 italic mb-4">
                    “{item.quote}”
                  </blockquote>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-[#0000ff] group"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
