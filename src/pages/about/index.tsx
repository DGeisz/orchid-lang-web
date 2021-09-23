import Head from "next/head";
import React from "react";
import styles from "./styles.module.scss";
import { BlockMath } from "react-katex";
import Highlight from "react-highlight";
import "katex/dist/katex.min.css";
import { palette } from "../../global_styles/palette";

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="outerContainer">
                <div className="contentContainer">
                    <h1 className={`${styles.headerTextPink} display-4`}>
                        What if proof assistants actually looked like math?
                    </h1>
                    <p className={styles.mainText}>
                        Proof assistants aren't anything new. In fact, they're
                        about as old as computers themselves. But quite frankly,
                        most theorem proving systems look like ancient relics to
                        the untrained eye.
                    </p>
                    <p className={styles.mainText}>
                        Despite their aesthetic appearance, these systems are
                        incredibly powerful. Coq was used to formalize the proof
                        of the Four Color Theorem. Isabelle has been used to
                        formally verify a variety of projects in the Java
                        toolset. The Xena project is slowly consuming the
                        entirety of undergraduate math in Lean.
                    </p>
                    <p className={styles.mainText}>
                        There's no denying these systems have tremendous
                        potential within the context of software development and
                        math. So why aren't proof assistants ubiquitous in these
                        fields?
                    </p>
                    <p className={styles.mainText}>
                        I'll give you a hint. Here's a fairly simple proof in
                        Isabelle:
                    </p>
                    <Highlight className="javascript">
                        {`section ‹Square roots of primes are irrational›
theory Sqrt
imports Complex_Main "HOL-Computational_Algebra.Primes"
begin

text ‹The square root of any prime number (including 2) is irrational.›

theorem sqrt_prime_irrational:
  assumes "prime (p::nat)"
  shows "sqrt p ∉ ℚ"
proof
  from ‹prime p› have p: "1 < p" by (simp add: prime_nat_iff)
  assume "sqrt p ∈ ℚ"
  then obtain m n :: nat where
      n: "n ≠ 0" and sqrt_rat: "¦sqrt p¦ = m / n"
    and "coprime m n" by (rule Rats_abs_nat_div_natE)
  have eq: "m^2 = p * n^2"
  proof -
    from n and sqrt_rat have "m = ¦sqrt p¦ * n" by simp
    then have "m^2 = (sqrt p)^2 * n^2"
      by (auto simp add: power2_eq_square)
    also have "(sqrt p)^2 = p" by simp
    also have "… * n^2 = p * n^2" by simp
    finally show ?thesis using of_nat_eq_iff by blast
  qed
  have "p dvd m ∧ p dvd n"
  proof
    from eq have "p dvd m^2" ..
    with ‹prime p› show "p dvd m" by (rule prime_dvd_power_nat)
    then obtain k where "m = p * k" ..
    with eq have "p * n^2 = p^2 * k^2" by (auto simp add: power2_eq_square ac_simps)
    with p have "n^2 = p * k^2" by (simp add: power2_eq_square)
    then have "p dvd n^2" ..
    with ‹prime p› show "p dvd n" by (rule prime_dvd_power_nat)
  qed
  then have "p dvd gcd m n" by simp
  with ‹coprime m n› have "p = 1" by simp
  with p show False by simp
qed`}
                    </Highlight>
                    <p className={styles.mainText}>
                        You'd be forgiven if your first impulse was to kick a
                        tree after looking at that.
                    </p>
                    <p className={styles.mainText}>
                        The simple fact of the matter is that no one would ever{" "}
                        <i>choose</i> to do math in this system unless they{" "}
                        <i>had</i> to. Even if you have a strong background in
                        programming and math you'd probably have to meticulously
                        pick through this to even figure out what the proof is
                        saying, let alone determine if it's correct.
                    </p>
                    <h1 className={`${styles.headerTextPink} display-4`}>
                        Theorem Proving needs a Glow-Up
                    </h1>
                    <p className={styles.mainText}>
                        Stereotypically, hardcore STEM types typically favor
                        functional utility over aesthetics. However, it's time
                        to put our foot down. If theorem proving is ever going
                        to break free of esoteric corners of academia and tiny
                        research groups in massive companies, it has to at least
                        be something that regular mathematicians and developers{" "}
                        <i>want</i> to look at.
                    </p>
                    <p className={styles.mainText}>
                        But here's the magical thing: we've already figured out
                        how to do this. Remember MathJax? Or maybe KaTeX? At
                        least you probably know of LaTeX. The point is, we've
                        figured out how to render math on computers, and we've
                        figured out how to do it extremely quickly. And that
                        means we can build an editor on top of it.
                    </p>
                    <p className={styles.mainText}>
                        If we want to bring math into the 21st century, we need
                        less of this:
                    </p>
                    <Highlight className="javascript">{`example : (∀ x : α, p x ∧ q x) → ∀ y : α, p y`}</Highlight>
                    <p className={styles.mainText}>And more of this:</p>
                    <div className={styles.kTexContainer}>
                        <BlockMath
                            math={`\\text{\\color{${palette.mediumPink}}{Example}} \\; : \\; \\left(\\forall x : \\alpha, \\; p(x) \\wedge q(x) \\right) \\Rightarrow \\left(\\forall y \\; : \\; \\alpha, \\; p(y) \\right)`}
                        />
                        <div className={styles.kTexRight} />
                    </div>
                    <p className={styles.mainText}>
                        And, as you probably guessed, this is precisely what
                        Orchid does.
                    </p>
                    <h1 className={`${styles.headerTextPink} display-4`}>
                        So what exactly <i>is</i> Orchid?
                    </h1>
                    <p className={styles.mainText}>
                        It's pretty simple. Orchid takes the guts of existing
                        theorem provers and turns them into a visual programming
                        language.
                    </p>
                    <p className={styles.mainText}>
                        In case you're not familiar, a visual programming
                        language is a language that lets you create programs by
                        working with a dedicated user interface instead of
                        simply typing out lines of code.
                    </p>
                    <p className={styles.mainText}>
                        So in Orchid, you'll be manipulating well-typeset
                        mathematical expressions instead of typing code. But
                        don't worry, working with Orchid is just as easy as any
                        programming language. Here's an example of a "line of
                        code:"
                    </p>
                    <div className={`${styles.kTexContainer}`}>
                        <BlockMath
                            math={`\\text{\\color{#bf3d11}{let}} \\; \\beta := \\tau_a \\cdot \\ln\\left[1 + \\frac{\\tau_w  +  \\sinh(x)}{2 + \\dfrac{1}{\\zeta^2}}\\right]`}
                        />
                        <div className={styles.kTexRight} />
                    </div>
                    <h1 className={`${styles.headerTextPink} display-4`}>
                        Ok, but what's going on under the hood?
                    </h1>
                    <p className={styles.mainText}>
                        The{" "}
                        <a target="_blank" href="https://leanprover.github.io/">
                            Lean theorem prover
                        </a>{" "}
                        is probably the most exciting proof assistant right now.
                        Why? Its formal foundation together with its
                        metaprogramming framework allows it to be both an
                        interactive theorem prover and an automated theorem
                        prover, all in <i>one</i> purely functional programming
                        language.
                    </p>
                    <p className={styles.mainText}>
                        Frankly, Lean is pretty amazing, so Orchid's backend,
                        formal foundation, and type system are all directly
                        modelled off of Lean's. And that's that.
                    </p>
                    <h1 className={`${styles.headerTextPink} display-4`}>
                        The Future of Math
                    </h1>
                    <p className={styles.mainText}>
                        Math has been called the "language of science." Indeed,
                        mathematical analysis is behind many of the greatest
                        human insights in history.
                    </p>
                    <p className={styles.mainText}>
                        Imagine that we've created software that allows us to
                        work with math in a manner that is theoretically sound
                        and aesthetically beautiful. Imagine this software is
                        incredibly accessible, even to those who've never
                        programmed before.
                    </p>
                    <p className={styles.mainText}>
                        As has been emphasized by{" "}
                        <a
                            href="https://www.youtube.com/watch?v=Dp-mQ3HxgDE"
                            target="_blank"
                        >
                            Kevin Buzzard
                        </a>
                        , math is an inherently modular process. Therefore, such
                        a piece of software would effectively allow for
                        "open-source math," wherein mathematical insights could
                        be shared and utilized at a totally unprecedented scale.
                    </p>
                    <p className={styles.mainText}>
                        This is the vision for Orchid.
                    </p>
                    <p className={styles.mainText}>
                        Orchid aims to help you not only <i>prove</i> things
                        about different systems but also <i>share</i> your
                        finding with other people.
                    </p>
                    <p className={styles.mainText}>
                        Orchid aims to help you not only <i>formalize</i> things
                        you already know but also <i>explore</i> the boundaries
                        of human knowledge.
                    </p>
                    <p className={styles.mainText}>
                        Orchid aims to help humanity unlock the full potential
                        of mathematics.
                    </p>
                    <h3 className={styles.dannyText}>
                        -- Danny Geisz,{" "}
                        <span className={styles.founderText}> Founder</span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default About;
