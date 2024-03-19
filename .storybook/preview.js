import { withScreenshot } from "storycap";

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [withScreenshot],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
