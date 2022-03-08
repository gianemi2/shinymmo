import React from 'react'
import { Progress } from 'antd'

function ProgressBar({ currentPermutationIndex, permutationsCount }) {
    return (
        <div style={{ marginBottom: 25 }}>
            <Progress
                strokeColor={{ from: '#00a5e3', to: '#006eab' }}
                percent={currentPermutationIndex / permutationsCount * 100}
                showInfo={false}
            />
            {currentPermutationIndex} / {permutationsCount}
        </div>
    )
}

export default ProgressBar