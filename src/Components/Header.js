import React, { useEffect } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage';
import logo from '../logo.png';
import Ads from './Ads';

function Header() {
    return (
        <div className='Header' style={{ textAlign: 'center', width: "100%" }}>
            <Ads></Ads>
            <img src={logo} style={{ maxWidth: 200 }} />
        </div>
    )
}

export default Header