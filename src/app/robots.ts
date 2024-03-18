export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://palchak.io/sitemap.xml',
    host: 'https://palchak.io',
  };
}