export default async function sitemap() {
  let routes = ['', '/about'].map((route) => ({
    url: `https://palchak.io${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}