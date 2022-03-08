import React from 'react'
import logo from '../logo.png';

function Header() {
    return (
        <div className='Header'>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8441432984375470"
                data-ad-slot="2777106929"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <img src={logo} style={{ maxWidth: 200 }} />
        </div>
    )
}

export default Header