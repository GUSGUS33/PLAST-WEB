'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

interface Props {
  theme?: 'dark' | 'light';
  defaultCity?: string;
}

export function ProductCalculator({ theme = 'dark', defaultCity = '' }: Props) {
  const [m2, setM2] = useState('');
  const [size, setSize] = useState('40x40');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState(defaultCity);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isDiscs = true;
  const isLight = theme === 'light';

  // Tile sizes and exact support factors per m2 (without 10% margin)
  const TILE_FACTORS: Record<string, { factor: number; label: string; name: string }> = {
    '30x30': { factor: 11.11, label: '30×30 cm — 11,11 soportes/m²', name: '30×30 cm' },
    '40x40': { factor: 6.25, label: '40×40 cm — 6,25 soportes/m²', name: '40×40 cm' },
    '30x60': { factor: 5.56, label: '30×60 cm — 5,56 soportes/m²', name: '30×60 cm' },
    '40x60': { factor: 4.17, label: '40×60 cm — 4,17 soportes/m²', name: '40×60 cm' },
    '50x60': { factor: 4.00, label: '50×60 cm — 4,00 soportes/m²', name: '50×60 cm' },
    '60x60': { factor: 2.78, label: '60×60 cm — 2,78 soportes/m²', name: '60×60 cm' },
  };

  // Real-time calculation if m2 is valid
  const normalizedM2 = m2.trim().replace(',', '.');
  const numericArea = parseFloat(normalizedM2);
  const isValidArea = !isNaN(numericArea) && numericArea > 0;

  const currentTile = TILE_FACTORS[size] || TILE_FACTORS['40x40'];
  const factor = currentTile.factor;

  // Exact calculation without 10% margin
  const currentResult = isValidArea ? Math.ceil(numericArea * factor) : null;
  const displayResult = result !== null ? result : currentResult;
  // Standard packaging reference: 100 units per box (adjustable with customer)
  const unitsPerBox = 100;
  const boxes = displayResult ? Math.ceil(displayResult / unitsPerBox) : 0;
  const totalInBoxes = boxes * unitsPerBox;

  const calculate = () => {
    setError(null);
    if (!isValidArea) {
      setResult(null);
      setError('Por favor, ingresá los metros cuadrados en la casilla (ejemplo: 400 o 35).');
      return;
    }
    const exactResult = Math.ceil(numericArea * factor);
    setResult(exactResult);
    setSubmitted(false);
  };

  const handleM2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setM2(e.target.value);
    setError(null);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    setError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const basePhone = "5491130213258";
  const activeCity = city || defaultCity;
  
  const textparts = [
    `Hola PLASTEM! Usé el calculador de su sitio web.`,
    isValidArea ? `Tengo ${m2} m² con baldosas de ${currentTile.name}${activeCity ? ` en ${activeCity}` : ''}.` : '',
    displayResult ? `Cálculo exacto: ${displayResult} discos soporte (${factor} un/m² — aprox. ${boxes} cajas de ${unitsPerBox} un.).` : '',
    name ? `Mi nombre es ${name}.` : '',
    `Quisiera cotización formal y coordinar cantidades para optimizar los costos de envío.`
  ].filter(Boolean).join('\n');
  
  const whatsappCotizar = `https://wa.me/${basePhone}?text=${encodeURIComponent(textparts)}`;

  return (
    <div id="product-calculator-box" className={`${isLight ? 'bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm' : 'bg-slate-800 p-8 rounded-3xl border border-slate-700'} w-full mb-6`}>
      <form 
        onSubmit={(e) => { 
          e.preventDefault(); 
          calculate(); 
        }} 
        className="space-y-4 flex flex-col mb-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="m2_calc" className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'} uppercase tracking-wider block px-1`}>
              Superficie a cubrir (m²)
            </label>
            <div className="relative">
              <input 
                required 
                type="text" 
                inputMode="decimal"
                id="m2_calc" 
                value={m2}
                onChange={handleM2Change}
                className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-base transition-all ${isLight ? 'bg-slate-50 border text-slate-900 border-slate-300 placeholder-slate-400 focus:bg-white' : 'bg-slate-700 border border-slate-600 text-white placeholder-slate-400'}`} 
                placeholder="Ej: 35 o 45.5" 
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                m²
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="size_calc" className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'} uppercase tracking-wider block px-1`}>
              Medida Baldosón
            </label>
            <select 
              id="size_calc"
              value={size}
              onChange={handleSizeChange}
              className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-base transition-all cursor-pointer ${isLight ? 'bg-slate-50 text-slate-900 border border-slate-300 focus:bg-white' : 'bg-slate-700 border border-slate-600 text-white'}`}
            >
              <option value="30x30">30×30 cm (11,11 soportes/m²)</option>
              <option value="40x40">40×40 cm (6,25 soportes/m²)</option>
              <option value="30x60">30×60 cm (5,56 soportes/m²)</option>
              <option value="40x60">40×60 cm (4,17 soportes/m²)</option>
              <option value="50x60">50×60 cm (4,00 soportes/m²)</option>
              <option value="60x60">60×60 cm (2,78 soportes/m²)</option>
            </select>
          </div>
        </div>
        
        <button 
          type="button"
          onClick={calculate}
          id="btn-calcular-discos"
          className={`w-full py-4 px-6 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-md active:scale-[0.99] mt-2 cursor-pointer flex items-center justify-center gap-2 select-none ${isLight ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/40'}`}
        >
          <span>CALCULAR DISCOS</span>
        </button>
        {error && (
          <p className="text-red-500 text-xs mt-1 text-center font-bold animate-in fade-in">{error}</p>
        )}
      </form>

      {displayResult !== null && (
        <div className={`mt-4 p-6 rounded-2xl animate-in fade-in zoom-in duration-200 ${isLight ? 'bg-gradient-to-br from-slate-900 to-blue-950 text-white border border-slate-800 shadow-xl' : 'bg-blue-950/70 border border-blue-500/30 text-white'}`}>
          <div className="text-center border-b pb-5 mb-5 border-white/10">
            <p className="text-blue-300 text-xs mb-1 uppercase tracking-widest font-black">
              Cómputo Técnico Exacto
            </p>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight my-1">
              {displayResult.toLocaleString('es-AR')} <span className="text-xl font-bold text-blue-300">discos</span>
            </div>
            <p className="text-sm font-semibold text-blue-100 mt-1">
              Referencia: <strong className="text-white font-black">{boxes} {boxes === 1 ? 'caja' : 'cajas'}</strong> (ejemplo en bultos estándar de {unitsPerBox} un. = {totalInBoxes} un.)
            </p>
            <p className="text-[12px] text-emerald-300 font-medium mt-1.5 bg-emerald-950/50 py-1 px-3 rounded-lg inline-block border border-emerald-500/20">
              💡 Cantidades y bultos convenibles a medida con el cliente para ajustar y optimizar costes de envío o traslado.
            </p>
            <p className="text-[11px] text-slate-300 italic mt-1.5">
              (Rendimiento exacto: {factor.toString().replace('.', ',')} soportes por m² para baldosas de {currentTile.name})
            </p>
          </div>
          
          {submitted ? (
            <div className="text-center py-4 bg-white/10 rounded-xl p-4">
              <p className="font-black text-green-400 mb-1 text-base">¡Solicitud recibida con éxito!</p>
              <p className="text-xs text-slate-200">Un asesor se contactará para enviarle la cotización formal y coordinar entrega.</p>
              <a 
                href={whatsappCotizar}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-green-600 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Enviar directo por WhatsApp
              </a>
            </div>
          ) : (
            <div>
              <h4 className="text-sm font-bold text-center mb-3 text-white">
                ¿Querés recibir cotización formal o consultar stock para entrega inmediata?
              </h4>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input 
                    required
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nombre y Apellido *" 
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                  <input 
                    required
                    type="tel" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Teléfono / WhatsApp *" 
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input 
                    type="text" 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Ciudad o Zona de Obra" 
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email (opcional)" 
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                  />
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button 
                    type="submit" 
                    className="flex-1 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
                  >
                    Enviar Solicitud
                  </button>
                  <a 
                    href={whatsappCotizar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-green-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
                  >
                    <Phone className="w-4 h-4" /> Cotizar por WhatsApp
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

