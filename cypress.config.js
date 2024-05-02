const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888', //maybe try 3000
    supportFile: false,
  },
});
