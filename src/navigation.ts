import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './configs/i18n.config';

export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation({ locales });
