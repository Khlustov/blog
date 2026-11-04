import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    html: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
