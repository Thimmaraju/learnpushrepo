const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {


    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": false,
      "json": true
    },

    projectId: "v1jsij",
    "video": false,
    "chromeWebSecurity": false,
    "env": {

      "clientUrl": "https://opensource-demo.orangehrmlive.com/"

    },
    "retries": {
      "runMode": 2,
     
    },
    "specPattern": "**/*.feature",
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 120000,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
