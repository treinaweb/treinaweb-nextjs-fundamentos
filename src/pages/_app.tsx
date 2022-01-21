import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '../ui/styles/Home.module.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <header>
                <h1 className={styles['title']}>
                    Treina
                    <span className={styles['title-second-word']}>Blog</span>
                </h1>
            </header>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
