import type { Preview } from "@storybook/react";
import { MantineProvider } from "@mantine/core";
import "../src/app/globals.css";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  // ここでMantineProviderを使って全てのストーリーにMantineのコンポーネントを適用する
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
