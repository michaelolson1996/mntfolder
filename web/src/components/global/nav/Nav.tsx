"use strict";

// next imports
import Image from "next/image";
import Link from "next/link";

// mui imports
import {
    AppBar,
    Box,
    Button,
    Stack,
    Toolbar,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// local imports

interface NavBarProps {

}

interface NavRoute {
    title: String;
    endpoint: String;
}

interface NavRouteGroup {
    name: String;
    routes: NavRoute[];
}

const routes: NavRouteGroup[] = [
    // HOME ROUTES
    {
        name: "Home",
        routes: [
            {
                title: "Home",
                endpoint: "/",
            },
        ],
    },
    // ABOUT ROUTES
    {
        name: "About",
        routes: [
            {
                title: "About",
                endpoint: "/",
            },
            {
                title: "Blog",
                endpoint: "/",
            },
            {
                title: "Forums",
                endpoint: "/",
            },
            {
                title: "Me",
                endpoint: "/",
            },
        ],
    },
    // FORUM ROUTES
    {
        name: "Forums",
        routes: [
            {
                title: "Forums",
                endpoint: "/",
            },
        ],
    },
    // VIDEO ROUTES
    {
        name: "Videos",
        routes: [
            {
                title: "Videos",
                endpoint: "/",
            },
        ],
    },
    // BLOG ROUTES
    {
        name: "Blog",
        routes: [
            {
                title: "Blog",
                endpoint: "/",
            },
        ],
    },
    // CONTACT ROUTES
    {
        name: "Contact",
        routes: [
            {
                title: "Contact",
                endpoint: "/",
            },
        ],
    },
];

const Nav = (): JSX.Element => {

    return (
        <Box>
            <AppBar
                position={"static"}
            >
                <Toolbar
                    sx={{
                        width: "90rem",
                        height: "64px",
                        backgroundColor: "red",
                        margin: "auto",
                    }}
                >
                    {/* <Image 
                        alt={"Title Image"}
                        src={"/ewfew"}
                        width={100}
                        height={100}
                        style={{

                        }}
                    /> */}
                    {/* <Stack
                        direction={"row"}
                    >
                        {
                            // routes.map(group => {
                            //     for (let i = 0; i < group.routes.length; i++) {
                            //         if (i === 0) {
                            //             return <Button></Button>
                            //         }
                            //     }
                            // })
                        }
                    </Stack>
                    <Button></Button> */}
                </Toolbar>
            </AppBar>
        </Box>
 
        // <header id={styles.global_nav__header_wrap}>
        /* //     <div id={styles.global_nav__header_title_wrap}>
        //         <h1 id={styles.global_nav__header_title}>mnt folder</h1>
        //     </div>
        //     <nav id={styles.global_nav__header_nav_wrap} aria-label={'Main Navigation'}>
        //         <ul>
        //             <li className={styles.global_nav__header_nav_button_wrap}>
        //                 <Link href={'/'}>
        //                     <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
        //                         Home
        //                     </a>
        //                 </Link>
        //             </li>
        //             <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button}`}>
        //                 <Link href={'/'}>
        //                     <a className={styles.global_nav__header_nav_buttons_text} href="" aria-haspopup={'true'} aria-expanded={'false'}>
        //                         About
        //                     </a>
        //                 </Link>
        //                 <ul className={styles.global_nav__header_nav_dropdown_wrap}>
        //                     <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
        //                         <Link href={'/'}>
        //                             <a className={styles.global_nav__header_nav_buttons_text}>Blog</a>
        //                         </Link>
        //                     </li>
        //                     <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
        //                         <Link href={'/'}>
        //                             <a className={styles.global_nav__header_nav_buttons_text}>Forums</a>
        //                         </Link>
        //                     </li>
        //                     <li className={`${styles.global_nav__header_nav_button_wrap} ${styles.global_nav__header_nav_dropdown_button_wrap}`}>
        //                         <Link href={'/'}>
        //                             <a className={styles.global_nav__header_nav_buttons_text}>Me</a>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li className={styles.global_nav__header_nav_button_wrap}>
        //                 <Link href={'/'}>
        //                     <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
        //                         Forums
        //                     </a>
        //                 </Link>
        //             </li>
        //             <li className={styles.global_nav__header_nav_button_wrap}>
        //                 <Link href={'/'}>
        //                     <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
        //                         Videos
        //                     </a>
        //                 </Link>
        //             </li>
        //             <li className={styles.global_nav__header_nav_button_wrap}>
        //                 <Link href={'/'}>
        //                     <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
        //                         Blog
        //                     </a>
        //                 </Link>
        //             </li>
        //             <li className={styles.global_nav__header_nav_button_wrap}>
        //                 <Link href={'/'}>
        //                     <a className={`${styles.global_nav__header_nav_buttons} ${styles.global_nav__header_nav_buttons_text}`}>
        //                         Contact
        //                     </a>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <section id={styles.global_nav__header_options_section}>
        //         <div>
        //             <Link href={"/login"}>
        //                 <a id={styles.global_nav__header_options_login_button}>Log In</a>
        //             </Link>
        //         </div>
        //         <div>
        //             <Image id={styles.global_nav__header_options_search_icon} onClick={() => props.toggleSearch(true)} src={'/search.svg'} height={20} width={20} />
        //         </div>
        //     </section> */
        // </header>
    );
};

export default Nav;