const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'cbyogh',
    video: true,
    baseUrl : "https://qacart-todo.herokuapp.com",
    viewportWidth:1440,
    viewportHeight: 900,
    videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
