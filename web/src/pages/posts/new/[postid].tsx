
import styles from './NewPost.module.css';
import Image from 'next/image';
import ImageUploader from '../../../components/newPost/imageuploader/ImageUploader';

export default function Post(props) {
    console.log(props)
    return (
        <div id={styles.newpost_main__wrap}>
            <div id={styles.newpost_main__edit_section}>
                <section id={styles.newpost_main__edit_author_section}>
                    <div>

                    </div>
                </section>
                <section id={styles.newpost_main__edit_header_section}>
                    <div>
                        {/* <form> */}
                            <button onClick={() => {
                                
                            }}>
                                <Image src={'/hello'} height={26} width={26} alt={'camera'} />
                            </button>
                        {/* </form> */}
                    </div>
                    <div>
                        <input id={styles.newpost_main__edit_title_input} />
                    </div>
                </section>
            </div>
        </div>
    );
};