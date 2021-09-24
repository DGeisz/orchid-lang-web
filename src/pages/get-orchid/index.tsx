import React from "react";
import styles from "./styles.module.scss";

const GetOrchid: React.FC = () => {
    return (
        <div className={styles.geOuterContainer}>
            <div className="contentContainer">
                <h3 className={styles.geHeavyDev}>
                    Right now, Orchid is under heavy development and does not
                    yet have a stable release.
                </h3>
                <h3 className={styles.geHeavyDevPink}>
                    However, if you are interested in using Orchid, you can
                    request access to try out the prototype or recommend an
                    integration.
                </h3>
            </div>
            <div className={styles.buttonContainer}>
                <a
                    href="mailto:dannygeisz@berkeley.edu?subject=Orchid Access Request"
                    className="button"
                >
                    Request Access
                </a>
            </div>
        </div>
    );
};

export default GetOrchid;
