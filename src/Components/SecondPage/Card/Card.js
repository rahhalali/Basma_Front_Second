import React, {useEffect} from 'react';
import './Card.css'
import {useDispatch, useSelector} from "react-redux";
import {GetInfo} from "../../../Redux/SecondPageSlice";
import {useTranslation} from "react-i18next";

function Card() {

    const { t }= useTranslation();
    // const dispatch=useDispatch();
    // const Info = useSelector(state=>state.info);
    // console.log('info',Info);
    // useEffect(()=>{
    //     dispatch(GetInfo());
    // },[dispatch])
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