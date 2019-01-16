const devConfig = {
  MONGO_URL: 'mongodb://localhost/db-dev',
  JWT_SECRET: 'thisisasecret',
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost/db-test',
};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost/db-prod',
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

// Take defaultConfig and make it a single object 
// So, we have concatenated two objects into one 
export default { ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
