import React from 'react';
import './FifthPage.css';
import Header from "./Header/Header";
import {useTranslation} from "react-i18next";
import Cloud from '../../Images/images/download.png';
import App from '../../Images/images/app.png';
import Setting from '../../Images/images/settings.png';

function FifthPage(props) {
    const { t } =useTranslation();
    return (
        <div className='fifth'>
            <div className='fifth-container'>
                <Header/>
                    <div className='fifth-info'>

                                <div className='arrow-flex'>
                                    <div className="new-arrow">
                                    <div className='fifth-info-first'>
                                        <div className='fifth-info-first-image'>
                                            <img src={Cloud} alt=''/>
                                        </div>
                                        <h2>{t('fifth_1_title')}</h2>
                                        <p>{t('fifth_1_paragraph')}</p>
                                    </div>
                                </div>
                                </div>

                        <div className='arrow-flex'>
                            <div className="new-arrow">
                                <i className="fas fa-chevron-right"/> </div>
                            <div className='fifth-info-first'>
                                <div className='fifth-info-first-image'>
                                    <img src={Setting} alt=''/>
                                </div>
                                <h2>{t('fifth_2_title')}</h2>
                                <p>{t('fifth_2_paragraph')}</p>
                            </div>
                        </div>

                        <div className='arrow-flex'>
                            <div className="new-arrow">
                                <i className="fas fa-chevron-right"/> </div>
                            <div className='fifth-info-first'>
                                <div className='fifth-info-first-image'>
                                    <img src={App} alt=''/>
                                </div>
                                <h2>{t('fifth_3_title')}</h2>
                                <p>{t('fifth_3_paragraph')}</p>
                            </div>
                        </div>


                </div>
            </div>
        </div>
    );
}

export default FifthPage;