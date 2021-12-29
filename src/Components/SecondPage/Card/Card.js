import React from 'react';
import './Card.css'

import {useTranslation} from "react-i18next";

function Card() {

    const { t }= useTranslation();
    return (
        <div className='card-inner'>
            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_1_icon')}/>
                </div>
                <h2>
                    {t('second_1_title')}
                </h2>
                <p>
                    {t('second_1_description')}
                </p>
            </div>

            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_2_icon')}/>
                </div>
                <h2>
                    {t('second_2_title')}
                </h2>
                <p>
                    {t('second_2_description')}
                </p>
            </div>

            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_3_icon')}/>
                </div>
                <h2>
                    {t('second_3_title')}
                </h2>
                <p>
                    {t('second_3_description')}
                </p>
            </div>

            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_4_icon')}/>
                </div>
                <h2>
                    {t('second_4_title')}
                </h2>
                <p>
                    {t('second_4_description')}
                </p>
            </div>

            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_5_icon')}/>
                </div>
                <h2>
                    {t('second_5_title')}
                </h2>
                <p>
                    {t('second_5_description')}
                </p>
            </div>

            <div className='second-page-card'>
                <div className='page-card-container'>
                    <i className={t('second_6_icon')}/>
                </div>
                <h2>
                    {t('second_6_title')}
                </h2>
                <p>
                    {t('second_6_description')}
                </p>
            </div>

        </div>
    );
}

export default Card;