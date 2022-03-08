import React, { useState } from 'react'
import confetti from 'canvas-confetti';
import { Modal, Button } from 'antd'
import useLocalStorage from '../Hooks/useLocalStorage'

function ShinyFound() {
    const [shinyFoundTimeoutID, setShinyFoundTimeoutID] = useState(0)
    const [adActive, setAdActive] = useLocalStorage('adActive', false)
    const [adDenied, setAdDenied] = useLocalStorage('adDenied', false)
    const [visible, setVisible] = useState(false)

    const handleNoMoreAds = () => {
        setVisible(false)
        setAdDenied(true)
        throwConfetti(false)
    }
    const handleNotNow = () => {
        setVisible(false)
        throwConfetti(false)
    }
    const handleOk = () => {
        setVisible(false)
        throwConfetti(false)
        setAdActive(true)
    }

    const throwConfetti = (showAds = true) => {
        for (let index = 0; index < 10; index++) {
            confetti({
                particleCount: 100,
                startVelocity: 30,
                spread: 360,
                origin: {
                    x: Math.random(),
                    // since they fall down, start a bit higher than random
                    y: Math.random() - 0.2
                }
            });
        }
        if (showAds && !adDenied) {
            handleAskForAds()
        }
    }

    const handleAskForAds = () => {
        clearTimeout(shinyFoundTimeoutID)
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 5000)
        setShinyFoundTimeoutID(timeout)
    }

    return (
        <>
            <Modal
                visible={visible}
                title="YAYYYY! You've found you're Shiny thanks to this method! ✨"
                footer={[
                    <Button key="never" onClick={handleNoMoreAds} danger>NEVER</Button>,
                    <Button key="notNow" onClick={handleNotNow} type="dashed" danger>Not now</Button>,
                    <Button key="ok" onClick={handleOk} type="primary">No problem 🙏🏼</Button>,
                ]}
                onCancel={handleNotNow}
            >
                If you want you can activate ads in this page. I don't like ads, that's why I waited for a great moment to ask you your permission. If you don't want ads, no problem! Happy shiny hunting ❤️
            </Modal>
            <Button type="primary" onClick={throwConfetti}>
                SHINY FOUND!
            </Button>
        </>
    )
}

export default ShinyFound