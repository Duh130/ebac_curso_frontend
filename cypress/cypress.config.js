const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    supportFile: false, // Desativa o arquivo de suporte
  },
});
