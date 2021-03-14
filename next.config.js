module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api-v2.soundcloud.com/:path*' // Proxy to Backend
        }
      ]
    }
  }