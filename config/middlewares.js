module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", env("DO_SPACE_CDN")],
          "media-src": ["'self'", "data:", "blob:", env("DO_SPACE_CDN")],
          upgradeInsecureRequests: null,
        }
      }
    }
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
