import React from 'react';
import './Header.css';
import {useTranslation} from "react-i18next";
function Header(props) {
    const {t}=useTranslation();
    return (
        <div className='eight-header'>
            <h1>{t('Eight_title')}</h1>
            <p>{t('Eight_paragraph')}</p>
        </div>
    );
}

export default Header;