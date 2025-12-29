import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import "@/styles/fonts.css";

const config = defineConfig({
  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
    "html, body": {
      color: "#333",
      backgroundColor: "#fff",
      fontFamily: `"Noto Sans JP", sans-serif`,
    },
  },
});

export const theme = createSystem(defaultConfig, config);
