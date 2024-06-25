import createMiddleware from 'next-intl/middleware';
import locales from './constants/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: locales[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)',
  ],
};
