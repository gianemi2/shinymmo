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
    },
    S: {
        color: 'geekblue',
        hints: "Now, save your game. You'll reload a new group using the save scum method. "
    }
}

const createPermutationView = (permutation, status) => {
    return (
        <Space className={status === "Guideline" ? 'guideline' : false} style={{ opacity: status === 'Current' ? 1 : 0.2, justifyContent: 'flex-end', width: '100%', overflowX: 'scroll' }} size={isMobile ? '2px' : 'small'} data-space={status} >
            {
                permutation.map((item, index) => {
                    return (
                        <Tooltip key={`${item}-${index}`} title={tagData[item].hints}>
                            <Tag style={{ minWidth: 32, textAlign: "center" }} color={tagData[item].color}>{item}</Tag>
                        </Tooltip>
                    )
                })
            }
        </Space >
    )
}

function PermutationView({ permutations }) {
    const { guideline, previous, current, next } = permutations
    return (
        <div style={{ marginBottom: 25 }}>
            <Space direction='vertical'>
                {guideline ? createPermutationView(guideline, 'Guideline') : false}
                {previous.length ? createPermutationView(previous, 'Previous') : false}
                {current.length ? createPermutationView(current, 'Current') : false}
                {next.length ? createPermutationView(next, 'Next') : false}
            </Space>
        </div>
    )
}



export default PermutationView