import "../styles/globals.css";
import "../configureAmplify";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import theme from "../theming/chakra-theme";
import amplifyTheme from "../theming/amplify-theme";
import { components } from "../theming/amplify-theme";
import "@aws-amplify/ui-react/styles.css";
import { CognitoUserAmplify } from "@aws-amplify/ui";
import NavBar from "../components/common/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <AmplifyProvider theme={amplifyTheme} colorMode="system">
          <Authenticator variation="default" hideSignUp components={components}>
            {(auth) => (
              <>
                <NavBar authSignOut={auth.signOut} />
                <Container maxW="container.lg" paddingY={"2em"}>
                  <Component {...pageProps} auth={auth} isAuthEnabled={true} />
                </Container>
              </>
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
