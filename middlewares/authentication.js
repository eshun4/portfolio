const env = require("../utilities/environments_configs");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: `${env.state.configurations.AUTH0_CLIENT_SECRET}`,
  baseURL: '`${env.state.configurations.BASE_URL}${env.state.configurations.PORT}`',
  clientID: `${env.state.configurations.AUTH0_CLIENT_ID}`,
  issuerBaseURL: `${env.state.configurations.AUTH0_ISSUER_BASE_URL}`
};

module.exports = config;