if (process.env.NODE_ENV === 'development') {
  require('dotenv').load(); // eslint-disable-line global-require
}

const configs = {
  port: process.env.PORT || 3000,
  hostname: process.env.HOST || 'localhost',
  apolloEngineKey: process.env.ENGINE_API_KEY || undefined,
  jwt: {
    secret: process.env.JWT_SECRET || 'V3ry5t40ng53c43t',
    tokenPrefix: process.env.JWT_TOKEN_PREFIX || 'Bearer',
  },
};

export default configs;
