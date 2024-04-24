"use client"
import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }: { placeholder: string; }) => {
    const handleSearch = () => {

    }
    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search