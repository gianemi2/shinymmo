import React from 'react'
import confetti from 'canvas-confetti';
import { Button } from 'antd'

function ShinyFound() {

    const throwConfetti = () => {
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
    }

    return (
        <Button type="primary" onClick={throwConfetti}>
            SHINY FOUND!
        </Button>
    )
}

export default ShinyFound