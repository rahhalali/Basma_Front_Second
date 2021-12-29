import React from 'react';
import './Header.css';
import {useTranslation} from "react-i18next";
function Header(props) {
    const {t}=useTranslation();
    return (
        <div className='header-second sixth-head owner'>
            <h1><span>{t('Sixth_main_title1')} </span>{t('Sixth_main_title2')} </h1>
            <p className='header-second-info sixth-info '>
                {t('Sixth_main_paragraph')}
            </p>

        </div>
    );
}

export default Header;