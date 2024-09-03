const { defineConfig } = require("cypress");
// const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    // defaultCommandTimeout:3000,
    //the defualt time out become 3s but if there any element in test file
    //have a inline time out it has a higher proireity like cy.get('#APjFqb 123',{timeout:6000})
    //inline tiome out have more proirity than the global one
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // setupNodeEvents(on, config) {
    //   on("task", { downloadFile });
    // },
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});
