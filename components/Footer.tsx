'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        
        {/* Compliance declaration */}
        <p className="text-sm sm:text-base text-slate-200 font-medium mb-6">
          Leadforce is a registered UK corporate services provider. All companies supplied are verifiable on Companies House.
        </p>

        {/* Leadforce Company details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm text-slate-400">
          <div>
            <span className="font-semibold text-slate-200 block mb-1">Company Info</span>
            <p>Leadforce Ltd</p>
            <p>Company No: 12177886</p>
          </div>
          <div>
            <span className="font-semibold text-slate-200 block mb-1">Registered Address</span>
            <address className="not-italic text-slate-400">
              Winsor And Newton Building,<br />
              Harrow, Wealdstone, HA3 5RN,<br />
              United Kingdom
            </address>
          </div>
          <div>
            <span className="font-semibold text-slate-200 block mb-1">Contact Details</span>
            <p className="mt-1">
              Phone: <a href="tel:+447480022706" className="text-blue-400 hover:text-blue-300 hover:underline">+44 7480 022706</a>
            </p>
            <p className="mt-1">
              Email: <a href="mailto:info@lead-force.co.uk" className="text-blue-400 hover:text-blue-300 hover:underline">info@lead-force.co.uk</a>
            </p>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex gap-4">
            <a href="https://www.lead-force.co.uk/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="https://www.lead-force.co.uk/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition">
              Privacy Policy
            </a>
          </div>
          <p>© {new Date().getFullYear()} Leadforce Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
