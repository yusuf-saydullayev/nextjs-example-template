import {
	defaultLocale,
	localePrefix,
	locales,
	// pathnames,
} from '@/configs/i18n.config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: locales,
	defaultLocale: defaultLocale,
	localeDetection: false,
	localePrefix: localePrefix,
	// pathnames: pathnames,
});

export const config = {
	matcher: [
		'/',
		'/(ru|en|uz)/:path*',
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
