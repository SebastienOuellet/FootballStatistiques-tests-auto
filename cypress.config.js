const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Augmenter le timeout par défaut
  defaultCommandTimeout: 15000,
  // Augmenter le timetout des wait des intercept
  requestTimeout: 20000,
  // Ne pas relancer les tests automatiquement lors du développement
  watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
