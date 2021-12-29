import React from 'react';
import './Inner.css'
import {ReactComponent as Home} from '../../../Images/images/form-house.svg';
import {ReactComponent as Phone} from '../../../Images/images/form-phone.svg';
import {ReactComponent as Mail} from '../../../Images/images/form-mail.svg';
import {useTranslation} from "react-i18next";
function Inner(props) {
    const {t}=useTranslation();
    return (
        <div className='nine-Inner'>
            <div className='Inner-info'>
                <p>{t('Nine_inner_p')}</p>
                <div className='Inner-list'>
                    <li>
                        <div className='image home' >
                            <Home   src={Home} alt=""/>
                        </div>
                        {t('Nine_inner_p2')}

                    </li>
                    <li>
                        <div className='image '><Phone src={Phone} alt=""/></div>

                        {t('Nine_inner_p3')}
                    </li>
                    <li>
                        <div className='image'><Mail src={Mail} alt=""/></div>
                        {t('Nine_inner_p4')}

                    </li>
                </div>
            </div>
        </div>
    );
}

export default Inner;