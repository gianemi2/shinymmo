import React from 'react'
import { Progress, Space } from 'antd'

function ProgressBar({ index, maxCount, style }) {
    return (
        <div style={{ ...style, display: 'flex', justifyContent: 'space-between' }}>
            <Progress
                strokeColor={{ from: '#00a5e3', to: '#006eab' }}
                percent={(index + 1) / maxCount * 100}
                showInfo={false}
            />
            <span style={{ flexBasis: 50, textAlign: 'right' }}>{index + 1} / {maxCount}</span>
        </div>
    )
}

export default ProgressBar