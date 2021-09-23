import * as React from "react";
import "../global_styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import TopNav from "../global_building_blocks/top_nav/top_nav";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Footer from "../global_building_blocks/footer/footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Orchid</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-light.min.css"
                />
            </Head>
            <TopNav />
            <Container>
                <Component {...pageProps} />
            </Container>
            <Footer />
        </>
    );
};

export default MyApp;
