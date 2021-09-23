import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import Image from "next/image";
import Highlight from "react-highlight";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const logoWidth = 400;
const logoHeight = 0.6786 * logoWidth;

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-light.min.css"
                />
            </Head>
            <div className={`${styles.headerContainer} p-4`}>
                <div className={styles.headerTitleContainer}>
                    <Image
                        src="/orch-g.png"
                        width={logoWidth}
                        height={logoHeight}
                    />
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
                            Math-driven Software
                        </span>
                    </h2>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>Learn More</div>
                </div>
            </div>
            <div className={`${styles.comparisonContainer} mt-4`}>
                <h2 className={styles.comparisonTitle}>
                    Want a quick comparison?
                </h2>
                <div className={styles.regCodeContainer}>
                    <h5>Other languages:</h5>
                    <Highlight className="javascript">
                        {`let beta = tau_a * Math.log(1 + ((tau_w + Math.sinh(x)) / (2 + (1 / (zeta ** 2)))))`}
                    </Highlight>
                    <p className={styles.explanationText}>
                        The mathematical content of the statement isn't
                        immediately accessible even if you understand code.
                    </p>
                </div>
                <div className={styles.vsContainer}>
                    <div className={styles.vsBar} />
                    <div className={styles.vsText}>vs</div>
                    <div className={styles.vsBar} />
                </div>
                <div className={styles.orchidCodeContainer}>
                    <h5 className={styles.orchidCodeTitle}>Orchid:</h5>
                    <div className={styles.kTexContainer}>
                        <BlockMath
                            math={`\\text{\\color{#bf3d11}{let}} \\; \\beta := \\tau_a \\cdot \\ln\\left(1 + \\frac{\\tau_w  +  \\sinh(x)}{2 + \\dfrac{1}{\\zeta^2}}\\right)`}
                        />
                        <div className={styles.kTexRight} />
                    </div>
                    <p className={styles.explanationText}>
                        The statement is immediately clear to anyone who
                        understands math.
                    </p>
                </div>
            </div>
            <div className={styles.separator} />
            <div className={styles.finalPlugContainer}>
                <h2 className={styles.finalPlug1}>
                    Create rock-solid proofs about your code/math.
                </h2>
                <h2 className={styles.finalPlug2}>
                    Share results with anyone who understands math.
                </h2>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>Unlock the Power</div>
            </div>
        </>
    );
};

export default Home;
