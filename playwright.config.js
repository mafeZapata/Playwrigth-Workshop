// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './test',
     timeout: 50 * 1000,
  expect: {
       timeout: 5000,
  },
  reporter: [
    ['html'],
    ['list']  // Esto añadirá un reporte en la consola
  ],

  use: {
    browserName: 'chromium',
    headless: true,
    // Habilitar los console.log de la página
    console: 'on'
  },

});

module.exports = config;

