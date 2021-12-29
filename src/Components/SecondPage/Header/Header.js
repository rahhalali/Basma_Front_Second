import React from 'react';
import './Header.css';
import {useTranslation } from "react-i18next";
function Header(props) {
const { t } =useTranslation();
    return (
        <div className='header-second'>
            <h1>{t("second_title_h1")}</h1>
            <p className='header-second-info'>
                {t('second_title_p')}
            </p>

        </div>
    );
}

export default Header;