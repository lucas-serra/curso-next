import GlobalStyle from "../src/components/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    );
}