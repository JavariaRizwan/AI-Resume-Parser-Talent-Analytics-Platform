import React, { useState } from 'react';
import { FileText, Menu, X, Sparkles, LayoutDashboard, History, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-100 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
            <div className="bg-gradient-to-tr from-indigo-500 to-violet-500 p-2 rounded-xl shadow-lg shadow-indigo-500/20">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Resume<span className="text-indigo-400">Analyzer</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 animate-pulse">
              <Sparkles className="w-3 h-3" /> AI
            </span>
          </div>


          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
         className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-indigo-500 to-violet-500 group-hover:from-indigo-500 group-hover:to-violet-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-indigo-800 transition-all duration-300 shadow-lg shadow-indigo-500/20 cursor-pointer">
                       
              <span 
              className="relative px-5 py-2 transition-all ease-in duration-75 bg-slate-900 rounded-xl group-hover:bg-opacity-0">
                Analyze Resume
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3 shadow-xl">
          <a href="#dashboard" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors">
            Dashboard
          </a>
          <a href="#history" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors">
            Past Scans
          </a>
          <a href="#pricing" className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors">
            Pricing
          </a>
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-3">
            <button 
            className="w-full cursor-pointer bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium py-2 px-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity text-sm ">
            Analyze Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;