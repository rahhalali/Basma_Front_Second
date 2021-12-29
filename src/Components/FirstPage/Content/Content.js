import React from 'react';
import './Content.css'
import Thumb from '../../../Images/images/thumb-1.png';
import {useTranslation } from "react-i18next";

function Content(props) {
    const { t }= useTranslation();
    return (
        <div className='content'>
            <div className='container'>
                <div className='info'>
                    <div className='info-inner'>
                        <h1>
                            {t('first_title')}
                        </h1>
                        <p>{t('first_paragraph')}</p>
                        <div className='button-container'>
                            <button className='btn'>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    <img src={Thumb} alt=''/>
                </div>

            </div>

        </div>

    );
}

export default Content;