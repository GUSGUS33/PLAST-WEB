import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

function resolveFile(urlPath) {
  const safePath = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const requestedPath = path.normalize(path.join(root, safePath));

  if (!requestedPath.startsWith(root)) {
    return null;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  const indexPath = path.join(requestedPath, 'index.html');
  if (existsSync(indexPath)) {
    return indexPath;
  }

  const htmlPath = `${requestedPath}.html`;
  if (existsSync(htmlPath)) {
    return htmlPath;
  }

  return path.join(root, '404.html');
}

createServer((request, response) => {
  const filePath = resolveFile(request.url || '/');

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  const extension = path.extname(filePath);
  response.writeHead(filePath.endsWith('404.html') ? 404 : 200, {
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
  });
  createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`Static preview ready at http://127.0.0.1:${port}`);
});
