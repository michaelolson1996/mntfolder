
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav(props) {
    return (
        <header id={styles.global_nav__header_wrap}>
            <div id={styles.global_nav__header_title_wrap}>
                <h1 id={styles.global_nav__header_title}>mnt folder</h1>
            </div>
            <nav id={styles.global_nav__header_nav_wrap} aria-label={'Main Navigation'}>
                <ul>
                    <li className={styles.global_nav__header_nav_button_wrap}>
                        <Link href={'/'}>
                            <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button}`}>
                        <Link href={'/'}>
                            <a className={styles.global_nav__header_nav_buttons_text} href="" aria-haspopup={'true'} aria-expanded={'false'}>
                                About
                            </a>
                        </Link>
                        <ul className={styles.global_nav__header_nav_dropdown_wrap}>
                            <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
                                <Link href={'/'}>
                                    <a className={styles.global_nav__header_nav_buttons_text}>Blog</a>
                                </Link>
                            </li>
                            <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
                                <Link href={'/'}>
                                    <a className={styles.global_nav__header_nav_buttons_text}>Forums</a>
                                </Link>
                            </li>
                            <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
                                <Link href={'/'}>
                                    <a className={styles.global_nav__header_nav_buttons_text}>Me</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.global_nav__header_nav_button_wrap}>
                        <Link href={'/'}>
                            <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
                                Forums
                            </a>
                        </Link>
                    </li>
                    <li className={styles.global_nav__header_nav_button_wrap}>
                        <Link href={'/'}>
                            <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
                                Videos
                            </a>
                        </Link>
                    </li>
                    <li className={styles.global_nav__header_nav_button_wrap}>
                        <Link href={'/'}>
                            <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className={styles.global_nav__header_nav_button_wrap}>
                        <Link href={'/'}>
                            <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <section id={styles.global_nav__header_options_section}>
                <div>
                    <Link href={"/login"}>
                        <a id={styles.global_nav__header_options_login_button}>Log In</a>
                    </Link>
                </div>
                <div>
                    <Image id={styles.global_nav__header_options_search_icon} onClick={() => props.toggleSearch(true)} src={'/search.svg'} height={20} width={20} />
                </div>
            </section>
        </header>
    );
};
