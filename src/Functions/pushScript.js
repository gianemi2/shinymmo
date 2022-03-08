const pushScript = url => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.head.appendChild(script);

};

export default pushScript;