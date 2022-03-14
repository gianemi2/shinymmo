import React from 'react'
import logo from '../logo.png';

function Header() {
    return (
        <div className='Header' style={{ textAlign: 'center', width: "100%" }}>
            <img src={logo} style={{ maxWidth: 200 }} />
        </div>
    )
}

export default Header