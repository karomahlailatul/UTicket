import React from 'react'
import styles from './searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';

const search_icon = findIconDefinition({prefix: 'fas', iconName: 'magnifying-glass'})

const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <div className={styles['search-icon']}>
                <FontAwesomeIcon className={styles["fa-icon"]} icon={search_icon} color="#A3A3A3" />
            </div>
            <input
                id="searchbar"
                name="searchbar"
                type="text"
                className={styles["search-field"]}
                placeholder="Where you want to go?"
            
            />
        </div>
    )
}

export default Searchbar