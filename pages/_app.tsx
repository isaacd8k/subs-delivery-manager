import "../styles/globals.css";
import "../configureAmplify";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import theme from "../theming/chakra-theme";
import amplifyTheme from "../theming/amplify-theme";
import { components } from "../theming/amplify-theme";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

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
          <Authenticator variation="default" hideSignUp components={components}>
            {(auth) => <Component {...pageProps} auth={auth} />}
          </Authenticator>
        </AmplifyProvider>
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
