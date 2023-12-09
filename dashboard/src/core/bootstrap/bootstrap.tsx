import "@mantine/core/styles.css";
import "@/core/theme/index.pcss";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme/theme.ts";
import { Router } from "@/core/router/Router.tsx";

export const Bootstrap = () => {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
};
