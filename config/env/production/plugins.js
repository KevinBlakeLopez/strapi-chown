import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import Keyv from "keyv";

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
        'price-tier': {
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
        cache: new KeyvAdapter(new Keyv(process.env.REDIS_URL))
      },
    },
  },
});
