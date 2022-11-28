
import styles from './Search.module.css'

export default function Search(props) {
    return (
        <div id={styles.global_search__wrap}>
            {/* <div id={styles.global_search__overlay} name={'search-section__close'} onClick={() => props.toggleSearch(false)}>
                <div id={styles.global_search__body} onClick={(e) => {
                    if (!e.target.attributes["name"] || e.target.attributes["name"].value !== 'search-section__close') {
                        e.stopPropagation();
                    };
                }}>
                    <div id={styles.global_search__top_section} role={'form'}>
                        <form id={styles.global_search__top_section_form} role={'search'} autoComplete={'off'}>
                            <div id={styles.global_search__top_section_wrap}>
                                <label id={styles.global_search__top_section_label} htmlFor="">
                                    <input id={styles.global_search__top_section_input} placeholder={'Search...'} type={'search'} inputMode={'search'} autoComplete={'search'} />
                                    <div id={styles.global_search__top_section_search_icon_button}>
                                        <span id={styles.global_search__top_section_search_icon}>
                                            <span className={''}></span>
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </form>
                        <button id={styles.global_search__top_section_close_icon_button} onClick={() => props.toggleSearch(false)}>
                            <span id={styles.global_search__top_section_close_icon}>
                                <span className={''}></span>
                            </span>
                        </button>
                    </div>
                    <section id={styles.global_search__filters_nav}>
                        <div>
                            <button id={styles.global_search__filters_nav_button}>
                                <span id={styles.global_search__filters_nav_filter_button} className={styles.global_search__filters_nav_dropdown_icons}>
                                    <span className={styles.visuallyhidden}>Open Tags Filters</span>
                                </span>
                            </button>
                            <div>
                                <button name={'filter-tags'} className={styles.global_search__filters_nav_dropdown_buttons}>
                                    <span id={styles.global_search__filters_nav_tags_button} className={styles.global_search__filters_nav_dropdown_icons}>
                                        <span className={styles.visuallyhidden}>Open Tags Filters</span>
                                    </span>
                                </button>
                                <button name={'filter-authors'} className={styles.global_search__filters_nav_dropdown_buttons}>
                                    <span id={styles.global_search__filters_nav_authors_button} className={styles.global_search__filters_nav_dropdown_icons}>
                                        <span className={styles.visuallyhidden}>Open Tags Filters</span>
                                    </span>
                                </button>
                                <button name={'filter-dates'} className={styles.global_search__filters_nav_dropdown_buttons}>
                                    <span id={styles.global_search__filters_nav_dates_button} className={styles.global_search__filters_nav_dropdown_icons}>
                                        <span className={styles.visuallyhidden}>Open Tags Filters</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div> */}
        </div>
    );
};