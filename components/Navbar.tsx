import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const navLinks = [
    { name: 'Productos', href: '/productos' },
    { name: 'Soluciones', href: '/soluciones' },
    { name: 'Guías', href: '/guias' },
    { name: 'Envíos', href: '/envios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div key="top-bar" className="bg-brand-dark text-white text-xs sm:text-sm hidden sm:block">
        <div key="top-bar-inner" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <div key="top-bar-contact" className="flex items-center gap-4">
            <a key="nav-phone" href="tel:+5491130213258" className="flex items-center gap-1 hover:text-gray-200">
              <Phone key="icon-phone" className="h-3 w-3" />
              <span key="txt-phone">+54 9 11 3021-3258</span>
            </a>
            <a key="nav-email" href="mailto:ventas@plastem.com.ar" className="hidden sm:flex items-center gap-1 hover:text-gray-200">
              <Mail key="icon-email" className="h-3 w-3" />
              <span key="txt-email">ventas@plastem.com.ar</span>
            </a>
          </div>
          <div key="top-bar-badge" className="flex items-center gap-2">
            <span>Envíos a todo el país</span>
          </div>
        </div>
      </div>
      <nav key="main-nav" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div key="nav-logo-wrap" className="flex items-center gap-2">
          <Link key="nav-logo" href="/" className="flex items-center gap-3">
            <BrandLogo
              boxClassName="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl"
              textClassName="text-2xl font-extrabold tracking-tight text-slate-800"
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div key="nav-links-wrap" className="hidden lg:flex lg:gap-6 text-sm font-medium text-slate-600 uppercase tracking-wide items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand py-2">
              {link.name}
            </Link>
          ))}
        </div>

        <div key="nav-actions-wrap" className="hidden lg:flex items-center gap-4">
          <a key="wa-btn" href="https://wa.me/5491130213258" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold flex items-center gap-2 hover:bg-green-600 transition-colors shadow-sm">
            <Phone key="wa-icon" className="w-4 h-4" /> HABLAR POR WHATSAPP
          </a>
          <Link key="cotizar-btn" href="/#calculador" className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm">
            COTIZAR
          </Link>
        </div>
      </nav>
    </header>
  );
}
