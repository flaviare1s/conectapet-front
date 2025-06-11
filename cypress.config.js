// cypress.config.js
import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task.js";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    experimentalStudio: true,
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
