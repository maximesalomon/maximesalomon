import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve(process.argv[2] ?? 'out');
const port = Number(process.argv[3] ?? process.env.PORT ?? 4173);

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.gif', 'image/gif'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.map', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function toSafePath(pathname) {
  return pathname.replace(/^\/+/, '');
}

function resolveStaticFile(pathname) {
  const cleanedPath =
    pathname === '/' ? '' : toSafePath(pathname.replace(/\/+$/, ''));
  const candidates = [
    path.join(rootDir, cleanedPath),
    path.join(rootDir, `${cleanedPath}.html`),
    path.join(rootDir, cleanedPath, 'index.html'),
    path.join(rootDir, '404.html'),
  ];

  return candidates.find(
    (candidate) => existsSync(candidate) && statSync(candidate).isFile(),
  );
}

const server = http.createServer((request, response) => {
  const url = new URL(
    request.url ?? '/',
    `http://${request.headers.host ?? 'localhost'}`,
  );
  const filePath = resolveStaticFile(decodeURIComponent(url.pathname));

  if (!filePath) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(filePath.endsWith('404.html') ? 404 : 200, {
    'Content-Type':
      contentTypes.get(path.extname(filePath)) ?? 'application/octet-stream',
  });

  createReadStream(filePath).pipe(response);
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Static server running at http://127.0.0.1:${port}`);
});
