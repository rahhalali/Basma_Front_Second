import React from 'react';
import './SeventhPage.css';
import Google from '../../Images/images/google-play.png'
import Apple from '../../Images/images/app-store.png'
import {useTranslation} from "react-i18next";
function SeventhPage(props) {
    const {t} =useTranslation();
    return (
        <div className='seventh'>
            <div className='seventh-inner'>
                <div className='seventh-info'>
                    <h1>{t('Seventh_title')}</h1>
                    <p className='information'>
                        {t('Seventh_paragraph')}
                    </p>
                    <div className='images-container'>
                        <div className='left-image'>
                            <img src={Google} alt=''/>
                        </div>
                        <div className='right-image'>
                            <img src={Apple} alt=''/>
                        </div>
                    </div>
                    <p className='italic'>{t('Seventh_paragraph2')}</p></div>

            </div>
        </div>
    );
}

export default SeventhPage;