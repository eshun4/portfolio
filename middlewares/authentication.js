const env = require("../utilities/environments_configs");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${env.state.configurations.AUTH0_CLIENT_SECRET}`,
  baseURL: 'http://localhost:3000',
  clientID: `${env.state.configurations.AUTH0_CLIENT_ID}`,
  issuerBaseURL: `${env.state.configurations.AUTH0_ISSUER_BASE_URL}`
};

module.exports = config;