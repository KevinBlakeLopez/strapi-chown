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
      ],
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
    enabled: false,
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
      },
    },
  },
});
