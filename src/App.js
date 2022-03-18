import { useState, useEffect, useMemo } from 'react'
import useLocalStorage from './Hooks/useLocalStorage'
import { Button, Space, Alert } from 'antd';
import { defaultCombinations, saveScumCombinations } from './Data';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { isMobile } from 'react-device-detect';
import { Header, Customizer, PermutationsTable, Footer, ProgressBar, ShinyFound, Pokemon } from './Components'
import './App.css'
import DefaultPermutations from './Components/DefaultPermutations';
import SaveScumPermutations from './Components/SaveScumPermutations';

function App() {
    const [permutations, setPermutations] = useState([])
    const [permutationsGroup, setPermutationsGroup] = useState([])
    const [firstHordeCount, setFirstHordeCount] = useLocalStorage('firstHordeCount', 8)
    const [currentPermutationIndex, setCurrentPermutationIndex] = useLocalStorage('currentPermutationIndex', 0)
    const [currentPermutationGroupIndex, setCurrentPermutationGroupIndex] = useLocalStorage('currentPermutationGroupIndex', 0)
    const [saveScum, setSaveScum] = useLocalStorage('saveScum', false)

    useMemo(() => {
        const combinations = saveScum ? saveScumCombinations : defaultCombinations
        let { permutations } = combinations.find(({ count }) => count == firstHordeCount);
        if (saveScum) {
            setPermutationsGroup(permutations)
            permutations = permutations[currentPermutationGroupIndex]
        }
        if (!permutations) return;
        setPermutations(permutations)
    }, [firstHordeCount, saveScum, currentPermutationGroupIndex])

    const handleNextGroup = () => {
        setCurrentPermutationGroupIndex(prev => prev + 1)
        setCurrentPermutationIndex(0)
    }

    const handleReset = () => {
        setCurrentPermutationGroupIndex(0)
        setCurrentPermutationIndex(0)
    }

    return (
        <div style={body}>
            <Header></Header>
            <div className='Content' style={content}>
                <div>
                    <Pokemon></Pokemon>
                    <Customizer
                        firstHordeCount={firstHordeCount}
                        currentPermutationIndex={currentPermutationIndex}
                        currentPermutationGroupIndex={currentPermutationGroupIndex}
                        maxPermutationsCount={permutations.length}
                        maxPermutationsGroupCount={permutationsGroup.length}
                        isSaveScumAbled={saveScum}
                        onSaveScumChange={setSaveScum}
                        onPermutationModeChange={permutations => setPermutations(permutations)}
                        onFirstHordeCountChange={count => setFirstHordeCount(count)}
                        onCurrentPermutationChange={count => setCurrentPermutationIndex(count)}
                        onCurrentPermutationGroupChange={count => setCurrentPermutationGroupIndex(count)}
                    />
                    {
                        saveScum
                            ? <SaveScumPermutations
                                permutations={permutations}
                                permutationsGroup={permutationsGroup}
                                currentPermutationIndex={currentPermutationIndex}
                                currentPermutationGroupIndex={currentPermutationGroupIndex}
                            />
                            : <DefaultPermutations
                                currentPermutationIndex={currentPermutationIndex}
                                permutations={permutations}
                            />
                    }
                    <Space style={{ marginTop: 15, marginBottom: 15 }} align="center" >
                        {
                            currentPermutationIndex < permutations.length - 1
                                ? <Button type="dashed" onClick={() => setCurrentPermutationIndex(prev => prev + 1)}>Next Permutation</Button>
                                : saveScum && currentPermutationGroupIndex <= permutationsGroup.length
                                    ? <Button type="dashed" onClick={handleNextGroup}>Next Group</Button>
                                    : <Button danger type="primary" onClick={handleReset}>Reset permutation</Button>
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
    width: 600,
    marginTop: 'auto',
    marginBottom: 'auto'
}

export default App;
