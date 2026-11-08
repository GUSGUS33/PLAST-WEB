import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function getHostname(headerValue: string | null) {
  if (!headerValue) {
    return null;
  }

  return headerValue
    .split(',')[0]
    .trim()
    .split(':')[0]
    .toLowerCase();
}

function redirectToCanonicalHostname(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.protocol = 'https:';
  url.host = 'plastem.com.ar';
  url.port = '';
  return NextResponse.redirect(url, 308);
}

export function proxy(request: NextRequest) {
  const host = getHostname(request.headers.get('host'));

  if (host === 'plastem.com.ar') {
    return NextResponse.next();
  }

  if (host === 'www.plastem.com.ar') {
    return redirectToCanonicalHostname(request);
  }

  const forwardedHost = getHostname(
    request.headers.get('x-forwarded-host'),
  );

  if (forwardedHost === 'www.plastem.com.ar') {
    return redirectToCanonicalHostname(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
