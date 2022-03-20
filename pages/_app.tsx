import "../styles/globals.css";
import "../configureAmplify";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createTheme,
  defaultTheme,
  AmplifyProvider,
} from "@aws-amplify/ui-react";
import theme from "./../chakra/theme";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

const amplifyTheme = createTheme({
  name: "dark-mode-theme",
  overrides: [
    {
      colorMode: "dark",
      tokens: {
        colors: {
          neutral: {
            // flipping the neutral palette
            10: defaultTheme.tokens.colors.neutral[100],
            20: defaultTheme.tokens.colors.neutral[90],
            40: defaultTheme.tokens.colors.neutral[80],
            80: defaultTheme.tokens.colors.neutral[40],
            90: defaultTheme.tokens.colors.neutral[20],
            100: defaultTheme.tokens.colors.neutral[10],
          },
          black: { value: "#fff" },
          white: { value: "#000" },
        },
      },
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </nav>

        <AmplifyProvider theme={amplifyTheme} colorMode="system">
          <Component {...pageProps} />
        </AmplifyProvider>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
