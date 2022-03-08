import React, { useEffect } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const Ads = () => {
    const [adActive] = useLocalStorage('adActive', false)

    useEffect(() => {
        try {
            console.log(`adactive: ${adActive}`);
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.log('error with ads');
            console.log(error);
        }
    }, [adActive])

    return (
        adActive ? <ins className="adsbygoogle"
            style={{ display: "block", width: "350px", height: "90px" }}
            data-ad-client="ca-pub-8441432984375470"
            data-ad-slot="2777106929"></ins> : false
    );

}
export default Ads