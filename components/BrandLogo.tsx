'use client';

import React, { useState, useEffect } from 'react';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
  boxClassName?: string;
}

/**
 * BrandLogo con fallback inteligente:
 * Por defecto muestra el monograma original ('P' + 'PLASTEM') inmediatamente para evitar parpadeos
 * o recuadros vacíos. En segundo plano verifica si existe `/imagenes/logo/plastem-logo.svg`;
 * si está disponible y carga con éxito, pasa a mostrar el SVG oficial.
 */
export default function BrandLogo({
  className = 'flex items-center gap-3',
  imageClassName = 'h-10 w-auto max-h-10 object-contain',
  textClassName = 'text-2xl font-extrabold tracking-tight text-slate-800',
  showText = true,
  boxClassName = 'flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xl',
}: BrandLogoProps) {
  const [svgAvailable, setSvgAvailable] = useState(false);

  useEffect(() => {
    // Comprobar si el archivo SVG existe y es válido
    const img = new window.Image();
    img.src = '/imagenes/logo/plastem-logo.svg';
    img.onload = () => {
      // Verificar que realmente es una imagen y tiene dimensiones
      if (img.naturalWidth > 0 || img.width > 0) {
        setSvgAvailable(true);
      }
    };
    img.onerror = () => {
      setSvgAvailable(false);
    };
  }, []);

  return (
    <div className={className}>
      {svgAvailable ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/imagenes/logo/plastem-logo.svg"
          alt="PLASTEM"
          className={imageClassName}
          onError={() => setSvgAvailable(false)}
        />
      ) : (
        <>
          <div className={boxClassName}>
            P
          </div>
          {showText && (
            <span className={textClassName}>
              PLASTEM
            </span>
          )}
        </>
      )}
    </div>
  );
}
