import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 Rayhan Kimi Nabiel Athallah</p>
            <p> Made using React & Bootstrap </p>
            <a href="https://github.com/rayhankimi/rayhank-webpage"> Source Code </a>
        </footer>
    );
}

export default Footer;
