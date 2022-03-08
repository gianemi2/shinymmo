import { useState, useEffect } from 'react'
import useLocalStorage from './Hooks/useLocalStorage'
import { Button, Space } from 'antd';
import variables from './Data/variables';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { isMobile } from 'react-device-detect';
import { Header, Customizer, PermutationsTable, Footer, ProgressBar, ShinyFound } from './Components'

function App() {
    const [permutations, setPermutations] = useState([])
    const [firstHordeCount, setFirstHordeCount] = useLocalStorage('firstHordeCount', 8)
    const [currentPermutationIndex, setCurrentPermutationIndex] = useLocalStorage('currentPermutationIndex', 0)
    const [adActive, setAdActive] = useLocalStorage('adActive', false)

    useEffect(() => {
        if (adActive) {
            try {
                var adsbygoogle = (window.adsbygoogle || []).pauseAdRequests = 0;
            } catch (error) {
                console.log('Error with ads:');
                console.log(error);
            }
        } else {
            var adsbygoogle = (window.adsbygoogle || []).pauseAdRequests = 1;
        }
    }, [adActive])

    useEffect(() => {
        const { permutations } = variables.find(({ count }) => count == firstHordeCount);
        if (!permutations) return;
        setPermutations(permutations)
    }, [firstHordeCount])

    return (
        <div style={body}>
            <Header></Header>
            <div className='Content' style={content}>
                <Customizer
                    onFirstHordeCountChange={count => setFirstHordeCount(count)}
                    firstHordeCount={firstHordeCount}
                    onCurrentPermutationChange={count => setCurrentPermutationIndex(count)}
                    currentPermutation={currentPermutationIndex}
                    maxPermutationsCount={permutations.length}
                />
                <ProgressBar currentPermutationIndex={currentPermutationIndex} permutationsCount={permutations.length} />
                <PermutationsTable data={permutations} count={parseInt(currentPermutationIndex)} />
                <Space>
                    {
                        currentPermutationIndex !== permutations.length
                            ? <Button type="dashed" onClick={() => setCurrentPermutationIndex(prev => prev + 1)}>Next Permutation</Button>
                            : <Button danger type="primary" onClick={() => setCurrentPermutationIndex(0)}>Reset permutation</Button>
                    }
                    <ShinyFound></ShinyFound>
                </Space>
                {
                    currentPermutationIndex >= permutations.length ?
                        "No more permutations found... " : false
                }
            </div>
            <Footer></Footer>
        </div >
    )
}

const body = {
    background: 'rgb(93,188,142)',
    background: 'linear-gradient(180deg, #5dbc8e 0%, #9dd29f 50%, rgba(93,188,142,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: !isMobile ? 'center' : 'initial',
    minHeight: '100vh',
    overflow: 'hidden'
}

const content = {
    padding: 15
}


export default App;
