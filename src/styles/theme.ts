import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
    body: {
      color: "#333",
      backgroundColor: "#fff",
    },
  },
});

export const theme = createSystem(defaultConfig, config);
