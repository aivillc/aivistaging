import { NextRequest, NextResponse } from 'next/server';

/**
 * Subdomain routing middleware for {company}.aivi.io landing pages.
 *
 * Intercepts requests to non-reserved subdomains and rewrites them to
 * /landing/{subdomain} where a server component loads the branded config
 * from the Supabase landing_pages table.
 *
 * IMPORTANT: We do NOT use a wildcard *.aivi.io domain on this Vercel project.
 * Each landing page subdomain is added individually to this Vercel project
 * via the Vercel API (by the create_landing_page MCP skill) and gets a
 * CNAME record in Cloudflare pointing to Vercel. This prevents hijacking
 * other subdomains like app.aivi.io, console.aivi.io, voice.aivi.io, etc.
 * that live on separate Vercel projects, DO App Platform, or bare metal servers.
 *
 * The reserved list below is a safety net — if a subdomain somehow routes
 * here despite not being configured, we pass through to normal routing.
 */

const RESERVED_SUBDOMAINS = new Set([
  'www', 'staging', 'app', 'api', 'mcp', 'voice', 'voicetwo',
  'grafana', 'prometheus', 'loki', 'pre-prod',
  'livekitsrv', 'lksrv1', 'lksrv1b', 'lksrv3a', 'lksrv3b', 'lksrv-staging',
  'rapida-do-1', 'rapida-do-2', 'rapida-li-1', 'rapida-li-2', 'rapida-redis-chi',
  'workers', 'dev-workers',
]);

const BASE_DOMAINS = ['aivi.io', 'localhost:3000'];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  let subdomain: string | null = null;

  for (const base of BASE_DOMAINS) {
    if (hostname.endsWith(base) && hostname !== base && hostname !== `www.${base}`) {
      subdomain = hostname.replace(`.${base}`, '').split('.')[0];
      break;
    }
  }

  // Also handle Vercel preview URLs: {subdomain}--{project}.vercel.app
  if (!subdomain && hostname.includes('.vercel.app')) {
    const parts = hostname.split('--');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  if (!subdomain || RESERVED_SUBDOMAINS.has(subdomain)) {
    const res = NextResponse.next();
    res.headers.set('x-mw-host', hostname);
    res.headers.set('x-mw-subdomain', subdomain || 'none');
    res.headers.set('x-mw-action', 'passthrough');
    return res;
  }

  // Rewrite to the dynamic landing page route
  const url = request.nextUrl.clone();
  url.pathname = `/landing/${subdomain}${url.pathname === '/' ? '' : url.pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.set('x-mw-host', hostname);
  res.headers.set('x-mw-subdomain', subdomain);
  res.headers.set('x-mw-action', `rewrite-to-landing-${subdomain}`);
  return res;
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next|api|static|favicon\\.ico|widget|robots\\.txt|sitemap\\.xml).*)',
  ],
};
// deploy 1778663339
