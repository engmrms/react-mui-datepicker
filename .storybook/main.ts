import type { StorybookConfig } from "@storybook/react-vite";

const excludedPropNames = ["null"];

const config: StorybookConfig = {
  stories: [
    "../src/Components/stories/index.mdx",
    "../src/Components/stories/installation.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    // '@storybook/addon-themes',
    "@storybook/addon-mdx-gfm",
    "storybook-dark-mode",
    "@chromatic-com/storybook",
  ],
  typescript: {
    // reactDocgenTypescriptOptions: {
    //     compilerOptions: {
    //         allowSyntheticDefaultImports: true,
    //         esModuleInterop: true,
    //     },
    //     propFilter: (prop, component) => {
    //         const isExcludedProp = excludedPropNames.includes(prop.name)
    //         const isHTMLElementProp = (prop.parent && prop.parent.fileName.includes('node_modules/@types/react/')) || false

    //         return !(isExcludedProp || isHTMLElementProp)
    //     },
    // },

    reactDocgen: "react-docgen-typescript",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    defaultName: "Documentation",
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.build = {
      ...config.build,
      commonjsOptions: { requireReturnsDefault: "preferred" },
    };

    return config;
  },
};
export default config;
