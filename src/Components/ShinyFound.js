import React, { useState } from 'react'
import confetti from 'canvas-confetti';
import { Button, Modal } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons';

const { confirm } = Modal

function ShinyFound({ onShinyFound }) {
    const [shinyFoundTimeout, setShinyFoundTimeout] = useState(0)

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

        handleShinyFound();
    }

    const handleShinyFound = () => {
        clearTimeout(shinyFoundTimeout)
        const timeout = setTimeout(() => confirm({
            title: 'Congratulations for your shiny 🎉 ',
            content: 'Do you want to reset every field? ',
            icon: <FileDoneOutlined />,
            cancelText: 'Nope',
            onOk() {
                onShinyFound()
            }
        }), 3500)
        setShinyFoundTimeout(timeout)
    }

    return (
        <Button type="primary" onClick={throwConfetti}>
            SHINY FOUND!
        </Button>
    )
}

export default ShinyFound