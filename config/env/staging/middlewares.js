module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "*.digitaloceanspaces.com", "market-assets.strapi.io", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "*.digitaloceanspaces.com", "market-assets.strapi.io", "res.cloudinary.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '20mb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
