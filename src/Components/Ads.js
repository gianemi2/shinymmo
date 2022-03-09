import React, { useEffect } from 'react';
import { Adsense } from '@ctrl/react-adsense';
import useLocalStorage from '../Hooks/useLocalStorage';

const Ads = () => {
    const [adActive] = useLocalStorage('adActive', false)

    return (
        adActive ? <Adsense
            style={{ display: "block" }}
            client="ca-pub-8441432984375470"
            slot="2777106929"
            format="fluid"
            layout="display"
            responsive='true'
        ></Adsense> : false
    );

}
export default Ads