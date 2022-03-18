import React, { useEffect, useState } from 'react'
import PermutationView from './PermutationView';

const defaultPermutations = { guideline: [], previous: [], current: [], next: [] };
function PermutationsTable(props) {
    let { data, count } = props;
    const [filteredPermutations, setFilteredPermutations] = useState(defaultPermutations)
    const [guidelines, setGuidelines] = useState([])

    useEffect(() => {
        if (!data) return;
        const filteredGuidelines = data.reduce((results, entry, index) => {
            if (entry.includes('S')) results.push({ index, entry })
            return results
        }, [])
        setGuidelines(filteredGuidelines)
        console.log(filteredGuidelines);
    }, [data])

    useEffect(() => {
        if (!data) return;
        setFilteredPermutations(defaultPermutations)


        let guideline;
        for (let i = guidelines.length - 1; i >= 0; i--) {
            if (guidelines[i].index < count) {
                guideline = guidelines[i];
                break;
            }
        }
        //guidelines.reverse().find(item => item.index < count)

        if (guideline !== undefined) {
            setFilteredPermutations(prevState => ({ ...prevState, guideline: guideline.entry }))
        } else if (data[count - 1] !== undefined) {
            setFilteredPermutations(prevState => ({ ...prevState, previous: data[count - 1] }))
        }

        if (data[count] !== undefined)
            setFilteredPermutations(prevState => ({ ...prevState, current: data[count] }))

        if (data[count + 1] !== undefined)
            setFilteredPermutations(prevState => ({ ...prevState, next: data[count + 1] }))

    }, [data, count, guidelines])


    return (
        filteredPermutations ? <PermutationView permutations={filteredPermutations} /> : false
    )
}

export default PermutationsTable