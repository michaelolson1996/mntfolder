
import styles from './Posts.module.css';

export default function Posts() {

    const posts = [
        {
            author: {
                name: "Michael Olson",
                image: {
                    url: "/michael.jpeg",
                    alt: "Michael Olson Image"
                },
                url: "/"
            },
            metadata: {
                _id: "813098301ewue93ue",
                title: "Setting Up a new Nginx Load Balancer",
                subTitle: "Learn how to effectively generate a new nginx server in Docker",
                age: "3 days ago",
                image: {
                    url: "https://images.unsplash.com/photo-1509664158680-07c5032b51e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=442ccbf5c1e7e58e0b9f1ed3e494fee8&auto=format&fit=crop&w=800&q=60",
                    alt: ""
                },
                tags: [
                    {
                        url: "/",
                        name: "Nginx"
                    },
                    {
                        url: "/",
                        name: "Docker"
                    }
                ]
            }
        }
    ];

    return (
        <section className={styles.home_sec2__posts_wrap}>
            {
                posts.map((post, index) => {
                    return (
                        <article className={styles.home_sec2__post_wrap} key={index}>
                            <div className={styles.home_sec2__post_border} />
                            <div className={styles.home_sec2__post_body}>
                                <div className={styles.home_sec2__post_image_wrap}>
                                    <img className={styles.home_sec2__post_image} src={post.metadata.image.url} />
                                </div>
                                <div className={''}>
                                    <div className={styles.home_sec2__post_title_wrap}>
                                        <h2 className={styles.home_sec2__post_title}>{post.metadata.title}</h2>
                                        <h3 className={styles.home_sec2__post_subtitle}>{post.metadata.subTitle}</h3>
                                    </div>
                                    <div className={styles.home_sec2__post_tags_wrap}>
                                        {
                                            post.metadata.tags.map((tag, index) => {
                                                return <a key={index} className={styles.home_sec2__post_tag} href={tag.url}>{tag.name}</a>
                                            })
                                        }
                                    </div>
                                    <div className={styles.home_sec2__post_info_author}>
                                        <img className={styles.home_sec2__post_info_author_image} src={post.author.image.url} />
                                        <p className={styles.home_sec2__post_info_author_name}>{post.author.name}</p>
                                        <p className={styles.home_sec2__post_info_post_age}>{post.metadata.age}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })
            }
        </section>
    );
}