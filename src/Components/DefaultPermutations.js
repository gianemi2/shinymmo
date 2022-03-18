import { Alert } from 'antd'
import React from 'react'
import PermutationsTable from './PermutationsTable'
import ProgressBar from './ProgressBar'

function DefaultPermutations(props) {
    const { currentPermutationIndex, permutations } = props
    return (
        <>
            <ProgressBar style={{ marginBottom: 25 }} index={currentPermutationIndex} maxCount={permutations.length} />
            <PermutationsTable data={permutations} count={parseInt(currentPermutationIndex)} />
            {
                currentPermutationIndex >= permutations.length ?
                    <Alert type="error" message="No more permutations found. If you didn't found any shiny you've just been unlucky." /> : false
            }
        </>
    )
}

export default DefaultPermutations