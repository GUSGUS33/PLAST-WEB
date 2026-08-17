'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageCategory, getPageImageData, generatePlastemPlaceholderSvg } from '@/lib/images';
import { ZoomIn, X } from 'lucide-react';

export interface DynamicImageProps {
  category?: ImageCategory;
  slug?: string;
  src?: string;
  alt?: string;
  title?: string;
  caption?: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9' | 'auto';
  priority?: boolean;
  showCaption?: boolean;
  enableZoom?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

export function DynamicImage({
  category = 'general',
  slug = 'hero-home',
  src: customSrc,
  alt: customAlt,
  title: customTitle,
  caption: customCaption,
  className = '',
  aspectRatio,
  priority = false,
  showCaption = false,
  enableZoom = false,
  fill = false,
  width = 1200,
  height = 675,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: DynamicImageProps) {
  // Obtener metadatos según categoría y slug si no se pasa src directo
  const meta = getPageImageData(category, slug);

  const initialSrc = customSrc || meta.src;
  const imageAlt = customAlt || meta.alt;
  const imageTitle = customTitle || meta.title || meta.fallbackSvgTitle || 'PLASTEM';
  const imageCaption = customCaption || meta.caption;
  const selectedAspect = aspectRatio || meta.aspectRatio || '16/9';

  const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Mapeo de aspecto visual
  const aspectClassMap = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    'auto': '',
  };

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      // Cargar SVG placeholder automático de PLASTEM
      const fallbackSvg = generatePlastemPlaceholderSvg(imageTitle, `Cargar /imagenes/${category}/${slug}.jpg`);
      setCurrentSrc(fallbackSvg);
    }
  };

  return (
    <figure className={`group relative overflow-hidden rounded-xl bg-slate-900/5 ${className}`}>
      <div className={`relative w-full ${!fill && selectedAspect !== 'auto' ? aspectClassMap[selectedAspect] : 'h-full w-full'}`}>
        <Image
          src={currentSrc}
          alt={imageAlt}
          title={imageTitle}
          fill={fill || selectedAspect !== 'auto'}
          width={!fill && selectedAspect === 'auto' ? width : undefined}
          height={!fill && selectedAspect === 'auto' ? height : undefined}
          priority={priority}
          sizes={sizes}
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            enableZoom ? 'cursor-zoom-in' : ''
          }`}
          onClick={() => enableZoom && setIsZoomed(true)}
        />

        {/* Zoom trigger badge */}
        {enableZoom && (
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="absolute bottom-3 right-3 rounded-full bg-slate-900/70 p-2 text-white backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-110"
            title="Ampliar imagen"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Caption opcional */}
      {showCaption && imageCaption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500 font-medium italic px-2">
          {imageCaption}
        </figcaption>
      )}

      {/* Modal Lightbox Zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-slate-950 p-2 shadow-2xl">
            <img
              src={currentSrc}
              alt={imageAlt}
              className="max-h-[85vh] w-auto max-w-[85vw] object-contain rounded-xl"
            />
            {imageCaption && (
              <p className="mt-2 text-center text-sm font-medium text-slate-300">
                {imageCaption}
              </p>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
