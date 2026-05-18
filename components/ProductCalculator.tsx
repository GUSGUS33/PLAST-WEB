'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/data/site';

interface Props {
  theme?: 'dark' | 'light';
}

export function ProductCalculator({ theme = 'dark' }: Props) {
  const [m2, setM2] = useState('');
  const [size, setSize] = useState('40x40');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calculate = () => {
    setError(null);
    const normalizedM2 = m2.trim().replace(',', '.');
    const area = parseFloat(normalizedM2);
    if (isNaN(area) || area <= 0) {
      setResult(null);
      setError('Por favor, ingresá una superficie válida en m².');
      return;
    }

    let multiplier = 7; // Default for 40x40
    if (size === '50x50') multiplier = 5;
    if (size === '60x40') multiplier = 5.5;

    // We add 10% for cuts and borders
    const estimated = Math.ceil(area * multiplier * 1.1);
    setResult(estimated);
    setSubmitted(false);
  };

  const handleM2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setM2(e.target.value);
    setResult(null); // Reset when changing
    setError(null);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    setResult(null);
    setError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappCotizar, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  let whatsappCotizar = whatsappUrl('Hola, quiero pedir presupuesto.');
  const normalizedM2 = m2.trim().replace(',', '.');
  if (result && parseFloat(normalizedM2) > 0) {
    const textparts = [
      `Hola, usé la calculadora de su web.`,
      `Tengo ${m2}m² con baldosas de ${size}. Según el cálculo necesito aprox ${result} discos.`,
      name ? `Mi nombre es ${name}.` : '',
      phone ? `Mi WhatsApp es ${phone}.` : '',
      city ? `Soy de ${city}.` : '',
      email ? `Mi email es ${email}.` : '',
      `¿Me pasarían presupuesto formal y costo de envío?`
    ].filter(Boolean).join(' ');
    
    whatsappCotizar = whatsappUrl(textparts);
  }

  const isLight = theme === 'light';

  return (
    <div className={`${isLight ? 'bg-white p-6 md:p-8 rounded-3xl border border-slate-200' : 'bg-slate-800 p-8 rounded-3xl border border-slate-700'} w-full mb-6`}>
      <form onSubmit={(e) => { e.preventDefault(); calculate(); }} className="space-y-4 flex flex-col mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="m2_calc" className={`text-[10px] font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest px-1`}>Sup. a cubrir (m²)</label>
            <input 
              required 
              type="text" 
              inputMode="decimal"
              id="m2_calc" 
              value={m2}
              onChange={handleM2Change}
              className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white border text-slate-800 border-slate-200 placeholder-slate-400' : 'bg-slate-700 border border-slate-600 text-white placeholder-slate-400'}`} 
              placeholder="Ej: 45 o 45,5" 
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="size_calc" className={`text-[10px] font-bold ${isLight ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest px-1`}>Medida Baldosón</label>
            <select 
              id="size_calc"
              value={size}
              onChange={handleSizeChange}
              className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white text-slate-800 border border-slate-200' : 'bg-slate-700 border border-slate-600 text-white'}`}
            >
              <option value="40x40">40x40 cm</option>
              <option value="50x50">50x50 cm</option>
              <option value="60x40">60x40 cm</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg mt-2 ${isLight ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' : 'bg-slate-600 text-white hover:bg-slate-500'}`}
        >
          Calcular Discos
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center font-medium animate-in fade-in">{error}</p>
        )}
      </form>

      {result !== null && (
        <div className={`mt-4 p-6 rounded-2xl animate-in fade-in zoom-in duration-300 ${isLight ? 'bg-blue-50 border border-blue-100' : 'bg-blue-900/50 border border-blue-500/30'}`}>
          <div className="text-center border-b pb-6 mb-6 border-blue-200/50">
            <p className={`${isLight ? 'text-blue-600' : 'text-blue-200'} text-sm mb-1 uppercase tracking-widest font-semibold`}>Cálculo Estimado</p>
            <div className={`text-3xl font-black mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              ~ {result} <span className={`text-xl font-bold ${isLight ? 'text-blue-600' : 'text-blue-300'}`}>discos</span>
            </div>
            <p className={`text-xs italic max-w-sm mx-auto ${isLight ? 'text-slate-500' : 'text-blue-300'}`}>
              (Incluye un 10% adicional sugerido para recortes y perímetros)
            </p>
          </div>
          
          {submitted ? (
             <div className="text-center py-6">
                <p className={`font-bold mb-2 ${isLight ? 'text-green-600' : 'text-green-400'}`}>Abrimos WhatsApp con tu consulta lista.</p>
                <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>Enviá el mensaje a {siteConfig.phone.display} para que podamos responderte con la cotización exacta.</p>
             </div>
          ) : (
            <div>
              <h3 className={`text-[15px] font-bold text-center mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>¿Querés recibir el presupuesto exacto con envío a tu ciudad?</h3>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nombre y Apellido" 
                    className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white border text-slate-800 border-slate-200 placeholder-slate-400' : 'bg-slate-800 border border-slate-700 text-white placeholder-slate-400'}`} 
                  />
                  <input 
                    required
                    type="tel" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="WhatsApp (con cód. de área)" 
                    className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white border text-slate-800 border-slate-200 placeholder-slate-400' : 'bg-slate-800 border border-slate-700 text-white placeholder-slate-400'}`} 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    required
                    type="text" 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Ciudad / Localidad" 
                    className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white border text-slate-800 border-slate-200 placeholder-slate-400' : 'bg-slate-800 border border-slate-700 text-white placeholder-slate-400'}`} 
                  />
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email (opcional)" 
                    className={`w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${isLight ? 'bg-white border text-slate-800 border-slate-200 placeholder-slate-400' : 'bg-slate-800 border border-slate-700 text-white placeholder-slate-400'}`} 
                  />
                </div>
                
                <div className="pt-3 flex flex-col gap-2">
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-blue-600 text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20"
                  >
                    Recibir presupuesto exacto
                  </button>
                  <Link 
                    href={whatsappCotizar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/20"
                  >
                    <Phone className="w-4 h-4" /> Hablar por WhatsApp
                  </Link>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
