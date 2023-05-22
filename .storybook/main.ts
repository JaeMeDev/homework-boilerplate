const { resolve } = require('path');
const { mergeConfig } = require("vite");

module.exports = {
  staticDirs: ['../public'],
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-docs"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async config => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve(__dirname, "/src")
        }
      },
      define: {
        "process.env": {}
      }
    });
  },
  docs: {
    autodocs: true
  }
};
