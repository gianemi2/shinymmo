import { useState, useEffect } from 'react'
import { Button, Layout, Progress, Space } from 'antd';
import confetti from 'canvas-confetti';
import Customizer from './Customizer/Customizer';
import PermutationsTable from './PermutationsTable/PermutationsTable';
import variables from './Data/variables';
import logo from './logo.png';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

console.log(logo);

const { Header, Footer, Content } = Layout;

function App() {
    const [permutations, setPermutations] = useState([])
    const [firstHordeCount, setFirstHordeCount] = useState(8)
    const [currentPermutationIndex, setCurrentPermutationIndex] = useState(0)

    useEffect(() => {
        const { permutations } = variables.find(({ count }) => count == firstHordeCount);
        if (!permutations) return;
        setPermutations(permutations)
    }, [firstHordeCount])

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
        <div style={body}>
            <div className='Header'>
                <img src={logo} />
            </div>
            <div className='Content' style={content}>
                <Customizer
                    onFirstHordeCountChange={count => setFirstHordeCount(count)}
                    firstHordeCount={firstHordeCount}
                    onCurrentPermutationChange={count => setCurrentPermutationIndex(count)}
                    currentPermutation={currentPermutationIndex}
                    maxPermutationsCount={permutations.length}
                />
                <div style={{ marginBottom: 25 }}>
                    <Progress
                        strokeColor={{ from: '#00a5e3', to: '#006eab' }}
                        percent={currentPermutationIndex / permutations.length * 100}
                        showInfo={false}
                    />
                    {currentPermutationIndex} / {permutations.length}
                </div>
                <div style={{ marginBottom: 25 }}>
                    <PermutationsTable data={permutations} count={parseInt(currentPermutationIndex)} />
                </div>
                <Space>

                    {
                        currentPermutationIndex !== permutations.length
                            ? <Button type="dashed" onClick={() => setCurrentPermutationIndex(prev => prev + 1)}>Next Permutation</Button>
                            : <Button danger type="primary" onClick={() => setCurrentPermutationIndex(0)}>Reset permutation</Button>
                    }
                    <Button type="primary" onClick={throwConfetti}>
                        SHINY FOUND!
                    </Button>
                </Space>
                {
                    currentPermutationIndex >= permutations.length ?
                        "No more permutations found... " : false
                }
            </div>
            <div style={footer}>
                Credits: Permutation method to <a href="https://www.youtube.com/watch?v=CqPJnvGJKu8" target="_blank">Austin John Plays</a>. Every permutations combinations to Smitty12 and Austin John Plays discord users.
            </div>
        </div>
    )
}

const body = {
    background: 'rgb(93,188,142)',
    background: 'linear-gradient(180deg, #5dbc8e 0%, #9dd29f 50%, rgba(93,188,142,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh'
}

const content = {
    width: 700,
    maxWidth: '100%'
}

const footer = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15
}

export default App;
