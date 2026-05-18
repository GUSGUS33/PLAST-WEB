'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/data/site';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Productos', href: '/productos' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Guías', href: '/guias' },
    { name: 'Envíos', href: '/envios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="bg-brand-dark text-white text-xs sm:text-sm hidden sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone.e164}`} className="flex items-center gap-1 hover:text-gray-200">
              <Phone className="h-3 w-3" />
              <span>{siteConfig.phone.display}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hidden sm:flex items-center gap-1 hover:text-gray-200">
              <Mail className="h-3 w-3" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Envíos a todo el país</span>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white font-bold text-xl">
              P
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-800">PLASTEM</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-6 text-sm font-medium text-slate-600 uppercase tracking-wide items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand py-2">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-600 transition-colors shadow-sm">
            <Phone className="w-4 h-4" fill="currentColor" /> HABLAR POR WHATSAPP
          </Link>
          <Link href="/#calculador" className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm">
            COTIZAR
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            className="text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="block py-3 px-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-3">
              <Link href={whatsappUrl('Hola, quiero hacer una consulta.')} target="_blank" rel="noopener noreferrer" className="justify-center px-4 py-3 bg-green-500 text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-green-600 transition-colors shadow-sm">
                Hablar por WhatsApp
              </Link>
              <Link href="/#calculador" onClick={() => setIsMobileMenuOpen(false)} className="justify-center text-center px-4 py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm">
                COTIZAR
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
