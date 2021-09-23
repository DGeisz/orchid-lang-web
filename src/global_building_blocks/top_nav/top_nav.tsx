import React from "react";
import styles from "./top_nav_styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Image from "next/image";

interface Props {
    displayClassName: string;
}

const logoHeight = 30;
const logoWidth = logoHeight * 0.587;

const TopNapBar: React.FC<Props> = (props) => {
    return (
        <Navbar
            collapseOnSelect
            className={`shadow-sm bg-white ${props.displayClassName} ${styles.navContainer}`}
            expand="md"
        >
            <Navbar.Brand>
                <Link href="/">
                    <a className={styles.logoContainer}>
                        <Image
                            src="/o_logo.png"
                            layout="intrinsic"
                            alt="logo"
                            height={logoHeight}
                            width={logoWidth}
                        />
                    </a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav-options" />
            <Navbar.Collapse id="nav-options">
                <Nav className={styles.navLeft}>
                    <Nav.Link href="/about">
                        <div className={styles.linkText}>About</div>
                    </Nav.Link>
                    <Nav.Link href="/examples">
                        <div className={styles.linkText}>Examples</div>
                    </Nav.Link>
                    <Nav.Link href="/get-orchid">
                        <div className={styles.linkText}>Get Orchid</div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const TopNav: React.FC = () => {
    return (
        <>
            <TopNapBar displayClassName="d-flex d-sm-none" />
            <TopNapBar displayClassName="d-none d-sm-flex sticky-top" />
        </>
    );
};

export default TopNav;
