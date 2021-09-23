import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const Home: React.FC = () => {
    return (
        <>
            <div className={`${styles.headerContainer} p-4`}>
                <div className={styles.headerTitleContainer}>
                    <Image src="/orchid.png" width={300} height={183} />
                </div>
                <div className={styles.sloganContainer}>
                    <h4 className={styles.sloganText}>
                        <span className={styles.sloganText}>The first </span>
                        <span className={styles.sloganItalic}> beautiful </span>
                        <span className={styles.sloganText}>
                            visual programming language for:
                        </span>
                    </h4>
                </div>
                <div className={styles.useCaseContainer}>
                    <h2 className={styles.useCaseText}>
                        <span className={styles.useCasePart}>
                            Theorem Proving
                        </span>
                        <span className={styles.useCasePart}>
                            Formal Verification
                        </span>
                        <span className={styles.useCasePart}>
                            Mathematical Computation
                        </span>
                    </h2>
                </div>

                {/*<a*/}
                {/*    target="_blank"*/}
                {/*    className="infoButton"*/}
                {/*    href="https://www.loom.com/share/569d055283db41eba9a559080b4dac16"*/}
                {/*>*/}
                {/*    Watch the Demo*/}
                {/*</a>*/}
            </div>
            {/*<div className={styles.contentContainer}>*/}
            {/*    <h4 className={styles.platformInfo}>*/}
            {/*        Digitari turns social media into a game.*/}
            {/*        <span className={styles.platformInfoBlue}>*/}
            {/*            Learn how it's rocking the internet.*/}
            {/*        </span>*/}
            {/*    </h4>*/}
            {/*    <Link href="/about">*/}
            {/*        <a className="infoButton">Learn more</a>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </>
    );
};

export default Home;
