import { Space, Tag, Tooltip } from 'antd'
import React from 'react'
import { isMobile } from 'react-device-detect'

const tagData = {
    C: {
        color: 'lime',
        hints: 'Catch it'
    },
    K1: {
        color: 'gold',
        hints: "Defeat it, if you have more K1 in this row defeat them in the same battle."
    },
    K2: {
        color: 'volcano',
        hints: "Defeat it, if you have more K2 in this row defeat them in the same battle."
    },
    K3: {
        color: 'magenta',
        hints: "Defeat it, if you have more K3 in this row defeat them in the same battle."
    }
}

const createPermutationView = (permutation, status) => (
    <Space style={status === 'Current' ? { opacity: 1 } : { opacity: 0.2 }} size={isMobile ? '2px' : 'small'}>
        {!isMobile ? <div style={{ minWidth: '60px' }}>{status}</div> : false}
        {permutation.map((item, index) => {
            return (
                <Tooltip key={`${item}-${index}`} title={tagData[item].hints}>
                    <Tag style={{ minWidth: isMobile ? '0' : '30px', textAlign: "center" }} color={tagData[item].color}>{item}</Tag>
                </Tooltip>
            )
        })}
    </Space>
)

function PermutationView({ permutations }) {
    const { previous, current, next } = permutations
    return (
        <div style={{ marginBottom: 25 }}>
            <Space direction='vertical'>
                {previous.length ? createPermutationView(previous, 'Previous') : false}
                {current.length ? createPermutationView(current, 'Current') : false}
                {next.length ? createPermutationView(next, 'Next') : false}
            </Space>
        </div>
    )
}



export default PermutationView