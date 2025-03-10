const Keyv = require("keyv");
const { KeyvAdapter } = require("@apollo/utils.keyvadapter");
const KeyvMemcache = require('@keyv/memcache');
const apolloServerPluginResponseCache = require('apollo-server-plugin-response-cache').default;
const ApolloServerPluginCacheControl = require('apollo-server-core').ApolloServerPluginCacheControl;

const servers = [
  process.env.MEMCACHE_SERVER
].join(",");

const memcache = new KeyvMemcache(servers, {
  retries: 10,
  expires: Number(process.env.STRAPI_GRAPHQL_DEFAULT_MAX_AGE),
});

module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        page: {
          field: 'slug',
          references: 'title',
        },
        brand: {
          field: 'slug',
          references: 'name',
        },
        project: {
          field: 'slug',
          references: 'title',
        },
        category: {
          field: 'slug',
          references: 'title',
        },
        subcategory: {
          field: 'slug',
          references: 'title',
        },
        'lead-time': {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  'preview-button': {
    config: {
      injectListViewColumn: false,
      openTarget: '_blank',
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: env('STRAPI_FE_URL') + '/{slug}',
            query: {
              preview: env('STRAPI_PREVIEW_SECRET'),
            },
          },
          published: {
            url: env('STRAPI_FE_URL') + '/{slug}',
          },
        },
        {
          uid: 'api::brand.brand',
          draft: {
            url: env('STRAPI_FE_URL') + '/brands/{slug}',
            query: {
              preview: env('STRAPI_PREVIEW_SECRET'),
            },
          },
          published: {
            url: env('STRAPI_FE_URL') + '/brands/{slug}',
          },
        },
        {
          uid: 'api::project.project',
          draft: {
            url: env('STRAPI_FE_URL') + '/projects/{slug}',
            query: {
              preview: env('STRAPI_PREVIEW_SECRET'),
            },
          },
          published: {
            url: env('STRAPI_FE_URL') + '/projects/{slug}',
          },
        },
      ],
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'duplicate-button': true,
  publisher: {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  'advanced-cache-manager': {
    enabled: true,
    config: {
      max_age: env('STRAPI_GRAPHQL_MAX_AGE'),
      cache_control_matrix: [
        { query: 'globalData', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'headerNavigation', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'footerNavigation', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'generalFormData', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'newsletterCta', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'categories', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'generalFormData', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'priceTiers', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'leadTimes', maxAge: env('STRAPI_GRAPHQL_MAX_AGE'), scope: "PUBLIC" },
        { query: 'pages', maxAge: env('STRAPI_GRAPHQL_MIN_AGE'), scope: "PUBLIC" },
        { query: 'brands', maxAge: env('STRAPI_GRAPHQL_MIN_AGE'), scope: "PUBLIC" },
        { query: 'projects', maxAge: env('STRAPI_GRAPHQL_MIN_AGE'), scope: "PUBLIC" },
      ],
    }
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: -1,
      maxLimit: -1,
      apolloServer: {
        tracing: true,
        cache: new KeyvAdapter(new Keyv({ store: memcache })),
        plugins: [
          // cache behavior lower age override higher age
          ApolloServerPluginCacheControl({ defaultMaxAge: env('STRAPI_GRAPHQL_DEFAULT_MAX_AGE') }),
          // customize your cache behavior according to your use case
          apolloServerPluginResponseCache({
            shouldReadFromCache: async(requestContext) => {
              return true;
            },
            shouldWriteToCache: async(requestContext) => {
              return true;
            },
            extraCacheKeyData: async(requestContext) => {
              return true;
            },
            sessionId: async (requestContext) => {
              return null;
            },
          }),
        ]
      },
    },
  },
});
//
