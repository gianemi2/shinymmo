import { useState, useEffect } from 'react'
import useLocalStorage from './Hooks/useLocalStorage'
import { Button, Space, Alert } from 'antd';
import variables from './Data/variables';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { isMobile } from 'react-device-detect';
import { Header, Customizer, PermutationsTable, Footer, ProgressBar, ShinyFound, Pokemon } from './Components'
import './App.css'
import { InfoCircleFilled } from '@ant-design/icons';

function App() {
    const [permutations, setPermutations] = useState([])
    const [firstHordeCount, setFirstHordeCount] = useLocalStorage('firstHordeCount', 8)
    const [currentPermutationIndex, setCurrentPermutationIndex] = useLocalStorage('currentPermutationIndex', 0)

    useEffect(() => {
        const { permutations } = variables.find(({ count }) => count == firstHordeCount);
        if (!permutations) return;
        setPermutations(permutations)
    }, [firstHordeCount])

    return (
        <div style={body}>
            <Header></Header>
            <div className='Content' style={content}>
                <div>
                    <Pokemon></Pokemon>
                    <Customizer
                        onFirstHordeCountChange={count => setFirstHordeCount(count)}
                        firstHordeCount={firstHordeCount}
                        onCurrentPermutationChange={count => setCurrentPermutationIndex(count)}
                        currentPermutation={currentPermutationIndex}
                        maxPermutationsCount={permutations.length - 1}
                    />
                    <ProgressBar currentPermutationIndex={currentPermutationIndex} permutationsCount={permutations.length - 1} />
                    <PermutationsTable data={permutations} count={parseInt(currentPermutationIndex)} />
                    {
                        currentPermutationIndex >= permutations.length ?
                            <Alert type="error" message="No more permutations found. If you didn't found any shiny you've just been unlucky." /> : false
                    }
                    <Space style={{ marginTop: 15, marginBottom: 15 }} align="center" >
                        {
                            currentPermutationIndex !== permutations.length
                                ? <Button type="dashed" onClick={() => setCurrentPermutationIndex(prev => prev + 1)}>Next Permutation</Button>
                                : <Button danger type="primary" onClick={() => setCurrentPermutationIndex(0)}>Reset permutation</Button>
                        }
                        <ShinyFound></ShinyFound>
                    </Space>
                </div>
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
    padding: 15,
    maxWidth: "100%",
    width: 500,
    marginTop: 'auto',
    marginBottom: 'auto'
}

export default App;
