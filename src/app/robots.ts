export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://palchak.io/sitemap.xml',
    host: 'https://palchak.io',
  };
}