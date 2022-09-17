import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styles from "../styles/Index.module.css";

export default function Index() {
    const element =
        <div className={styles.container}>
            <Head>
                <title>penguin</title>
                <meta name="description" content="TODO: description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    penguin
                </h1>

                <div className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        Are you stupid? Do you have ADHD? Tell us what you{"'"}re
                        interested in and we{"'"}ll email you a Wikipedia article
                        every day from your favorite categories.
                    </p>
                    <p className={styles.description}>
                        You{"'"}ll still be stupid and have ADHD, but at least
                        you{"'"}ll feel a bit better about yourself.
                    </p>
                </div>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>;
    return element;
}
