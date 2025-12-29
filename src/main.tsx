import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";

import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
