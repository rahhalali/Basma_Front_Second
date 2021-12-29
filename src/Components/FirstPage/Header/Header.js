import React, {useEffect, useState} from 'react';
import './Header.css'
import i18n from "i18next";
import cookies from "js-cookie";
function Header(props) {

    const language =[
        {
            code :'en',
            name:'English',
            country_code:'gb',
           dir:'ltr'
        },
        {
            code :'ar',
            name:'العربية',
            country_code:'sa',
            dir:'rtl'
        }
    ]
    const [showLinks,setShowLinks]=useState(false);
    const currentLanguageCode =cookies.get('i18next') || 'en'
    const currentLanguage = language.find(l => l.code === currentLanguageCode);
    useEffect(()=>{
    document.body.dir = currentLanguage.dir || 'ltr';
    if(document.body.dir === 'rtl') {
        document.getElementById('FirstPage').style.clipPath =
            'polygon(0 0, 54% 0, 25% 75%, 0 49%)';
    }
    },[currentLanguage])
    return (
            <nav className='nav'>
                <ul className='ul' id={showLinks ? "hidden" : ""}>
                    <li className='li arrow' >
                        Home
                    </li>
                    <li className='li'>
                        Feature
                    </li>
                    <li className='li arrow'>
                        Pages
                    </li>
                    <li className='li'>
                        Screenshots
                    </li>
                    <li className='li price'>
                        Pricing
                    </li>
                    <li className='li'>
                        Contact
                    </li>
                    <li className='li'>
                        <ul className='inner-ul'>
                            {language.map(({code ,name,country_code})=>(
                                    <li key={country_code}>
                                        <button onClick={()=>{i18n.changeLanguage(code);window.location.reload()}}> {name}</button>
                                       </li>
                                )
                            )}
                        </ul>
                    </li>

                </ul>
                {showLinks ? "" : <i className="fas fa-bars show" onClick={() => setShowLinks(!showLinks)}/>}
                {showLinks ? <i className="fas fa-window-close closing" onClick={()=>setShowLinks(!showLinks)}/>: ""}
            </nav>
    );
}

export default Header;