import React, {Fragment} from 'react';
import './List.css'
import {ReactComponent as Icon} from '../../../Images/images/check.svg';

import {useTranslation} from "react-i18next";

function List(props) {
    const { t }=useTranslation();

    return (
        <div className='list'>

            <Fragment>
                <h1>{t('third_header')}</h1>
                <ul className='third-page-container-info-ul'>

                    <li>
                        <div><Icon className="logo-img"/></div>
                        <p>{t('info_1_infos')}</p>
                    </li>

                    <li>
                        <div><Icon className="logo-img"/></div>
                        <p>{t('info_2_infos')}</p>
                    </li>

                    <li>
                        <div><Icon className="logo-img"/></div>
                        <p>{t('info_3_infos')}</p>
                    </li>

                    <li>
                        <div><Icon className="logo-img"/></div>
                        <p>{t('info_4_infos')}</p>
                    </li>

                    <li>
                        <div><Icon className="logo-img"/></div>
                        <p>{t('info_5_infos')}</p>
                    </li>


                </ul>
            </Fragment>


        </div>
    );
}

export default List;