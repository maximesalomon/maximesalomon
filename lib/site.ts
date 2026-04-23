export const siteConfig = {
  name: 'Maxime Salomon',
  title: 'Maxime Salomon | Learning, building, and writing',
  description:
    'Personal site and writing archive for Maxime Salomon, covering growth, engineering, and building on the internet.',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ],
  social: [
    { href: 'https://twitter.com/maximesalomon', label: 'X' },
    { href: 'https://github.com/maximesalomon', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/maximesalomon', label: 'LinkedIn' },
  ],
};

export function getSiteUrl() {
  const rawValue =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!rawValue) {
    return 'http://localhost:3000';
  }

  return rawValue.startsWith('http') ? rawValue : `https://${rawValue}`;
}

export function getAbsoluteUrl(pathname = '/') {
  return new URL(pathname, getSiteUrl()).toString();
}
