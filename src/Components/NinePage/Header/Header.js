import React from 'react';
import './Header.css'
import {useTranslation} from "react-i18next";
function Header(props) {
    const { t }=useTranslation();
    return (
        <div className='header-second sixth-head nine-head'>
            <h1>{t('Nine_main_title')}</h1>
            <p className='header-fifth-info'>
                {t('Nine_main_paragraph')}
            </p>

        </div>
    );
}

export default Header;