import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true
    },
    
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      }, 
    },
  },

  decorators: [
    (Story, context) => {
      const isDark =
        context.globals.backgrounds?.value === "#000000" ||
        context.globals.theme === "dark";

      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return Story(context);
    },
  ],
};

export default preview;
