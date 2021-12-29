import React from 'react';
import './SixthPage.css';

import Bike from '../../Images/images/bike.png';
import Moto from  '../../Images/images/motorbike.png';
import Header from "./Header/Header";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
function SixthPage(props) {
    const { t }=useTranslation();
    return (
        <div className='sixth'>

            <div className="sixth-inner">
                <div className='sixth-header'>
                    <Header/>
                </div>
                <div className='sixth-card'>

                    <div className='sixth-first'>
                        <div className='sixth-icon'>
                            <img src={Bike} alt=''/>
                        </div>
                        <p className='type'>{t('Sixth_1_title')}</p>
                        <p className='price'>$<span>{t('Sixth_1_price')}</span></p>
                        <p>{t('Sixth_1_paragraph_1')}</p>
                        <p>{t('Sixth_1_paragraph_2')}</p>
                        <p>{t('Sixth_1_paragraph_3')}</p>
                        <p>{t('Sixth_1_paragraph_4')}</p>

                        <button className='sixth-btn'>Sign Up</button>
                    </div>

                    <div className='sixth-first'>
                        <div className='sixth-icon'>
                            <img src={Moto} alt=''/>
                        </div>
                        <p className='type'>{t('Sixth_2_title')}</p>
                        <p className='price'>$<span>{t('Sixth_2_price')}</span></p>

                        <p >{t('Sixth_2_paragraph_1')}</p>
                        <p >{t('Sixth_2_paragraph_2')}</p>
                        <p >{t('Sixth_2_paragraph_3')}</p>
                        <p >{t('Sixth_2_paragraph_4')}</p>

                        <button className='sixth-btn'>Sign Up</button>
                    </div>

                </div>
                <div className='footer'>
                    <p>Not sure what to choose? <Link to='#'>Contact Us</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;