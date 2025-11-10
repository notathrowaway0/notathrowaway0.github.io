import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // 1. This tells Cypress to load the support file
    //    (which imports cypress-axe) before any spec.
    supportFile: "cypress/support/e2e.js",

    // 2. This tells Cypress where to find your tests.
    //    It will now find 'cypress/e2e/home.cy.ts'.
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // 3. This sets the base URL for cy.visit('/')
    baseUrl: "http://localhost:3000",

    // Optional: Recommended setting for Next.js
    video: false,
  },
});
