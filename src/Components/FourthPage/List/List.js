import React from 'react';
import './List.css'
import {useTranslation} from "react-i18next";

function List() {
    const { t }=useTranslation();
    return (
        <div className='list-fourth'>

                            <h1>{t('fourth_header')}</h1>
                            <ul className='third-page-container-info-ul'>
                                    <li >
                                        <div><i className={t('fourth_1_icon')}/></div>
                                        <p>{t('fourth_1_infos')}</p>
                                    </li>

                                <li >
                                    <div><i className={t('fourth_2_icon')}/></div>
                                    <p>{t('fourth_2_infos')}</p>
                                </li>

                                <li >
                                    <div><i className={t('fourth_3_icon')}/></div>
                                    <p>{t('fourth_3_infos')}</p>
                                </li>

                                <li >
                                    <div><i className={t('fourth_4_icon')}/></div>
                                    <p>{t('fourth_4_infos')}</p>
                                </li>


                            </ul>

        </div>
    );
}

export default List;