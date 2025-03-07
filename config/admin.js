module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'BRVvWRC6yc8PQMzZrK1E+w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '2pI+QBdU5rKN3PW+qjVOhA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'BRVvWRC6yc8PQMzZrK1E+w=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
