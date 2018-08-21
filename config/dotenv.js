module.exports = function(env) {
  return {
    clientAllowedKeys: ['API_URL', 'STAGING_API_URL'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};
