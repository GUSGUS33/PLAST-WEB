# PLASTEM Web

Sitio web oficial de PLASTEM para discos soporte para baldosones y soluciones para pisos flotantes.

## Tecnologías

* Next.js
* TypeScript
* Tailwind CSS
* Exportación estática

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:3000
```

## Build de producción

```bash
npm run build
```

El proyecto está configurado para generar una exportación estática en la carpeta:

```txt
dist/
```

## Deploy en Hostinger

Como el sitio es estático, se puede desplegar subiendo el contenido de la carpeta `dist/` al directorio `public_html` de Hostinger.

También puede conectarse desde GitHub y configurar:

```txt
Install command: npm install
Build command: npm run build
Publish directory: dist
```

## Seguridad

No subir archivos `.env`, `.env.local`, `node_modules`, `.next`, `dist` ni `out`.
