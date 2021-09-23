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
