const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://localhost:1234';
      chromeWebSecurity: false;
      viewportHeight: 1080;
      viewportWidth: 1920;
      waitForAnimations: true;
      animationDistanceThreshold: 20;
      defaultCommandTimeout: 20000;
      execTimeout: 60000;
      pageLoadTimeout: 600000;
      retries: 0;
      userAgent: null;
      video: false
    },
  },
});
