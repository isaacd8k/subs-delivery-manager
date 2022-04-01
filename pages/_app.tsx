import "../styles/globals.css";
import "../configureAmplify";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import theme from "../theming/chakra-theme";
import amplifyTheme from "../theming/amplify-theme";
import { components } from "../theming/amplify-theme";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";
import { CognitoUserAmplify } from "@aws-amplify/ui";

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
          <Link href="/subscribers">
            <a>Subscribers</a>
          </Link>
          <Link href="/periodicals">
            <a>Periodicals</a>
          </Link>
        </nav>

        <AmplifyProvider theme={amplifyTheme} colorMode="system">
          <Authenticator variation="default" hideSignUp components={components}>
            {(auth) => (
              <Container maxW="container.xl">
                <Component {...pageProps} auth={auth} isAuthEnabled={true} />
              </Container>
            )}
          </Authenticator>
        </AmplifyProvider>
      </div>
    </ChakraProvider>
  );
}

// export types for pages that inherit props from _app.tsx
export type AdditionalPageProps = {
  // ! hard-copied from type definition above
  auth: {
    signOut: (data?: Record<string | number | symbol, any> | undefined) => void;
    user: CognitoUserAmplify;
  };
  isAuthEnabled: boolean;
};

export default MyApp;
