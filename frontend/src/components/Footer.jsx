import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-500/10 p-1.5 rounded-lg border border-indigo-500/20">
                <FileText className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="font-bold text-lg text-slate-100 tracking-tight">
                Resume<span className="text-indigo-400">Analyzer</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              Optimize your resume for modern Applicant Tracking Systems (ATS) with precise, autonomous agentic AI feedback.
            </p>
            <div className="flex space-x-4 pt-2">
  {/* GitHub */}
  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  </a>

  {/* Twitter / X */}
  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  </a>
</div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-xs tracking-wider uppercase">Features</h3>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#ats-scorer" className="hover:text-indigo-400 transition-colors">ATS Score Checker</a></li>
              <li><a href="#keyword-optimizer" className="hover:text-indigo-400 transition-colors">Keyword Optimization</a></li>
              <li><a href="#tailoring-tool" className="hover:text-indigo-400 transition-colors">Job Description Tailoring</a></li>
              <li><a href="#privacy" className="hover:text-indigo-400 transition-colors">Data Security</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-4 text-xs tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Resume Tips Blog</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#support" className="hover:text-indigo-400 transition-colors">Help & Support</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-slate-200 font-semibold text-xs tracking-wider uppercase">Stay Updated</h3>
            <p className="text-xs text-slate-500">Get the latest career strategies and AI features delivered to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-850 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500 w-full placeholder-slate-600 transition-colors"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Resume Analyzer AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;