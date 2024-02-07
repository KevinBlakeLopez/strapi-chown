module.exports = ({ env }) => ({
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
  upload: {
    config: {
      provider: "strapi-provider-upload-dos",
      providerOptions: {
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),
        directory: env('DO_SPACE_DIRECTORY'),
        cdn: env('DO_SPACE_CDN'),
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
      },
    },
  },
});
