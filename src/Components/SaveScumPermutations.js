import React, { useEffect, useMemo, useState } from 'react'
import PermutationsTable from './PermutationsTable'
import ProgressBar from './ProgressBar'

function SaveScumPermutations(props) {
    const { currentPermutationIndex, permutations, permutationsGroup, currentPermutationGroupIndex } = props

    return (
        <>
            <ProgressBar index={currentPermutationGroupIndex} maxCount={permutationsGroup.length} />
            <ProgressBar index={currentPermutationIndex} maxCount={permutations.length} style={{ marginBottom: 25 }} />
            <PermutationsTable data={permutations} count={currentPermutationIndex} />
        </>
    )
}

export default SaveScumPermutations