import React from "react";
import styles from "./top_nav_styles.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    displayClassName: string;
}

const TopNapBar: React.FC<Props> = (props) => {
    const router = useRouter();

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
                            src="/o_top.png"
                            layout="intrinsic"
                            alt="logo"
                            height={40}
                            width={25}
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
                    <Nav.Link href="/blog">
                        <div className={styles.linkText}>Blog</div>
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
