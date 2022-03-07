import React, { useEffect, useState } from 'react'
import { Table, Tag } from 'antd'
import PermutationView from './PermutationView';

const defaultPermutations = { previous: [], current: [], next: [] };
function PermutationsTable(props) {
    const { data, count } = props;
    const [filteredPermutations, setFilteredPermutations] = useState(defaultPermutations)
    console.log(data)
    useEffect(() => {
        if (!data) return;
        setFilteredPermutations(defaultPermutations)

        if (data[count - 1] !== undefined)
            setFilteredPermutations(prevState => ({ ...prevState, previous: data[count - 1] }))

        if (data[count] !== undefined)
            setFilteredPermutations(prevState => ({ ...prevState, current: data[count] }))

        if (data[count + 1] !== undefined)
            setFilteredPermutations(prevState => ({ ...prevState, next: data[count + 1] }))

    }, [data, count])


    return (
        filteredPermutations ? <PermutationView permutations={filteredPermutations} /> : false
    )
}

export default PermutationsTable