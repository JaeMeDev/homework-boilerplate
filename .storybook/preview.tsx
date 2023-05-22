import type { Preview } from "@storybook/react";
import defaultTheme from "../src/styles/defaultTheme";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
    )
  ]
};

export default preview;
