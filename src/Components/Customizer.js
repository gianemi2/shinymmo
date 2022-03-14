import React from 'react'
import { Select, InputNumber, Space, Form } from 'antd'
import { isMobile } from 'react-device-detect';
const { Option } = Select

function Customizer(props) {
    const { onFirstHordeCountChange, onCurrentPermutationChange, firstHordeCount, currentPermutation, maxPermutationsCount } = props;

    return (
        <Form layout="vertical">
            <Space className='fullwidthChildren' direction={isMobile ? 'vertical' : 'horizontal'} style={{ width: '100%' }}>
                <Form.Item label="Pokemon in first horde: " style={{ marginBottom: isMobile ? 0 : 24, width: '100%' }}>
                    <Select defaultValue={firstHordeCount} onChange={onFirstHordeCountChange}>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Current permutation" style={{ width: '100%' }}>
                    <InputNumber style={{ width: "100%" }} min={0} max={maxPermutationsCount} defaultValue={0} onChange={onCurrentPermutationChange} value={currentPermutation} />
                </Form.Item>
            </Space>
        </Form >
    )
}

export default Customizer