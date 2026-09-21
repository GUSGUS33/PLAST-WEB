# Directorio de Imágenes de PLASTEM (/public/imagenes/)

En esta carpeta puedes cargar las imágenes descriptivas de tu sitio web.
El sistema las detectará y cargará dinámicamente según la siguiente convención de nombres:

## 1. Productos (`/public/imagenes/productos/`)
Guarda las fotos con el nombre del slug del producto + `.jpg` (o `.png` / `.webp`):
- `disco-soporte-baldosones.jpg`
- `buches-plasticos.jpg`

## 2. Soluciones (`/public/imagenes/soluciones/`)
Guarda las fotos con el slug de la solución:
- `terraza-transitable.jpg`
- `piso-sobre-membrana.jpg`
- `nivelar-piso-exterior.jpg`
- `evitar-filtraciones-terraza.jpg`
- `discos-soporte-para-constructoras.jpg`

## 3. Guías Técnicas (`/public/imagenes/guias/`)
Guarda las fotos de portada o paso a paso para las guías:
- `como-instalar-discos-soporte.jpg`
- `como-nivelar-terraza.jpg`
- `piso-flotante-exterior-como-hacer.jpg`
- `calcular-discos-soporte-terraza.jpg`

## 4. Envíos y Ciudades (`/public/imagenes/envios/`)
Guarda las fotos representativas de envíos o logística por ciudad/provincia:
- `buenos-aires.jpg`
- `caba.jpg`
- `cordoba.jpg`
- `rosario.jpg`
- `mendoza.jpg`
- `tucuman.jpg`

## 5. Imágenes Generales (`/public/imagenes/general/`)
Imágenes generales del sitio, hero, fábrica y empresa:
- `hero-home.jpg`
- `fabrica-plastem.jpg`
- `galeria-1.jpg`
- `galeria-2.jpg`
- `galeria-3.jpg`

## 6. Logo Corporativo (`/public/imagenes/logo/`)
Guarda aquí el isotipo o logotipo de la empresa:
- `plastem-logo.svg` (se cargará automáticamente en la cabecera del Navbar y en el Footer con fallback al monograma y texto 'PLASTEM' en caso de no existir o fallar).

---

> **Nota:** Si una imagen no existe aún en el disco, el componente `<DynamicImage />` mostrará automáticamente un diseño fallback elegante con la marca PLASTEM sin romper la interfaz.
