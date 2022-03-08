import React, { useEffect } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage';
import logo from '../logo.png';


function Header() {
    const [adActive] = useLocalStorage('adActive', false)
    useEffect(() => {
        if (adActive) {
            try {
                console.log('Loading ads by google')
                window.adsbygoogle.push({})
            } catch (error) {
                console.log('error with ads');
                console.log(error);
            }
        }
    }, [adActive])
    return (
        <div className='Header' style={{ textAlign: 'center', width: "100%" }}>
            <div className="banner" style={{ width: 350 }}>
                {
                    adActive ? <ins className="adsbygoogle"
                        style={{ display: "block", width: "350px", height: "90px" }}
                        data-ad-client="ca-pub-8441432984375470"
                        data-ad-slot="2777106929"></ins> : false
                }
            </div>
            <img src={logo} style={{ maxWidth: 200 }} />
        </div>
    )
}

export default Header