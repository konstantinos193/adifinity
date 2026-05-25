export default function redirects() {
  // Only apply redirects in production
  const isProduction = process.env.NODE_ENV === 'production'
  
  if (!isProduction) {
    return [] // No redirects in development
  }
  
  return [
    // Redirect HTTP to HTTPS
    {
      source: 'http://:path*',
      destination: 'https://adinfinity.gr/:path*',
      permanent: true,
    },
    // Redirect www to non-www
    {
      source: 'https://www.adinfinity.gr/:path*',
      destination: 'https://adinfinity.gr/:path*',
      permanent: true,
    },
    // Redirect old Joomla URLs to homepage
    {
      source: '/?option=com_k2&view=itemlist&task=user&id=:id*',
      destination: '/',
      permanent: true,
    },
    // Redirect other old Joomla URLs
    {
      source: '/:path*?option=com_k2*',
      destination: '/',
      permanent: true,
    },
    // Redirect HTTP www to HTTPS non-www
    {
      source: 'http://www.adinfinity.gr/:path*',
      destination: 'https://adinfinity.gr/:path*',
      permanent: true,
    },
  ]
}
