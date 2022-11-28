
import styles from './RecommendedGraph.module.css';

export default function RecommendedGraph() {

    const posts = [
        {
            author: {
                name: "Michael Olson",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "a",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "George Davis",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "b",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69d6355c8b8bc2acac6f158fa334ebab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "John Murone",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "c",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1498230870289-7561110a6e69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d966c8669492502408e355ef9584bab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "Michael Olson",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "d",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "George Davis",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "e",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69d6355c8b8bc2acac6f158fa334ebab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "John Murone",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "f",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1498230870289-7561110a6e69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d966c8669492502408e355ef9584bab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "Michael Olson",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "g",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "George Davis",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "h",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69d6355c8b8bc2acac6f158fa334ebab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
        {
            author: {
                name: "John Murone",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image",
                },
                url: "/",
            },
            metadata: {
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                gridArea: "i",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1498230870289-7561110a6e69?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d966c8669492502408e355ef9584bab&auto=format&fit=crop&w=800&q=60",
                    alt: "",
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx",
                    },
                    {
                        url: "/",
                        name: "Docker",
                    },
                ]
            }
        },
    ];

    return (
        <section id={styles.home_sec1__wrap}>
            <div id={styles.home_sec1__graph}>
                {
                    posts.map((post, index) => {
                        return (
                            <div key={index} className={styles.home_sec1__panes} style={{gridArea: post.metadata.gridArea, backgroundImage: `url(${post.metadata.image.url})`}}>
                                <div className={styles.home_sec1__panes_overlay}></div>
                                <div className={styles.home_sec1__panes_info}>
                                    <div className={styles.home_sec1__panes_info_author}>
                                        <img className={styles.home_sec1__panes_info_author_image} src={post.author.image.url} />
                                        <p className={styles.home_sec1__panes_info_author_name}>{post.author.name}</p>
                                        <p className={styles.home_sec1__panes_info_post_age}>{post.metadata.age}</p>
                                    </div>
                                    <div className={styles.home_sec1__panes_info_post}>
                                        <p className={styles.home_sec1__panes_info_post_title}>
                                            {post.metadata.title}
                                        </p>
                                        <div className={styles.home_sec1__panes_info_post_tags}>
                                            {
                                                post.metadata.tags.map((tag, index) => {
                                                    return <a key={index} className={styles.home_sec1__panes_info_post_tag} href={tag.url}>{tag.name}</a>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};