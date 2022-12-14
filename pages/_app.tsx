import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps) {
    const element =
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>;
    return element;
}
