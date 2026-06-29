import React from "react";
import { Link } from "wouter";

export function Footer() {
  const luxuryFont = { fontFamily: '"Cormorant Garamond", serif' };

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Idolans Info-Tech" className="h-full w-full object-contain p-1" />
              </div>
              <span className="font-semibold text-xl tracking-[0.2em] uppercase text-white" style={luxuryFont}>
                Idolans Info-Tech
              </span>
            </Link>
            <p className="text-white/75 mb-6 max-w-sm leading-5" style={luxuryFont}>
              Building the digital infrastructure for Africa's most ambitious schools, hospitals, and enterprises.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={luxuryFont}>Products</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>SCHOLARLY</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>ApexCare HMS</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>EduAI</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Integritest</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>App Engine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={luxuryFont}>Company</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white uppercase tracking-[0.2em] text-sm" style={luxuryFont}>Legal</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors leading-5" style={luxuryFont}>Service Level Agreement</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60" style={luxuryFont}>
            © {new Date().getFullYear()} Idolans Info-Tech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors" style={luxuryFont}>
              In
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-slate-950 transition-colors" style={luxuryFont}>
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
