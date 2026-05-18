# PLASTEM Web

Sitio web oficial de PLASTEM para presentar productos, soluciones técnicas, guías de instalación y cobertura de envíos para discos soporte de baldosones y pisos flotantes exteriores.

## Stack Técnico

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Exportación estática

## Desarrollo Local

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

El proyecto está configurado con `output: "export"` y genera el sitio estático en:

```txt
dist/
```

## Deploy en Hostinger

El deploy recomendado es subir el contenido generado dentro de `dist/` al directorio `public_html` de Hostinger.

Si se conecta desde GitHub, usar:

```txt
Install command: npm install
Build command: npm run build
Publish directory: dist
```

## Variables de Entorno Futuras

Actualmente no se requieren claves privadas ni integraciones externas.

Variable pública prevista:

```txt
NEXT_PUBLIC_SITE_URL="https://www.plastem.com.ar"
```

Solo debe contener la URL pública de producción. No guardar secretos en variables `NEXT_PUBLIC_*`.

## Checklist Pre-Deploy

- Confirmar que no existan archivos `.env` o `.env.local` en el commit.
- Confirmar que `node_modules/`, `.next/`, `dist/`, `.npm-cache/` y logs no estén versionados.
- Ejecutar validaciones locales.
- Revisar que las rutas principales carguen correctamente.
- Revisar `sitemap.xml` y `robots.txt` generados.
- Confirmar que las imágenes usadas sean assets propios o aprobados.

## Comandos de Validación

```bash
npm install
npm run lint
npm run build
npm audit
```

## Seguridad

No subir al repositorio:

- `.env`
- `.env.local`
- `node_modules/`
- `.next/`
- `dist/`
- `.npm-cache/`
- logs (`*.log`)
