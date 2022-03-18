import React, { useEffect } from 'react'
import { Select, InputNumber, Space, Form, Switch } from 'antd'
import { isMobile } from 'react-device-detect';
import useLocalStorage from '../Hooks/useLocalStorage';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { variables, saveScumVariables } from '../Data';
const { Option } = Select

function Customizer(props) {
    const {
        onFirstHordeCountChange,
        onCurrentPermutationChange,
        onSaveScumChange,
        onCurrentPermutationGroupChange,
        isSaveScumAbled,
        firstHordeCount,
        currentPermutationIndex,
        maxPermutationsCount,
        maxPermutationsGroupCount,
        currentPermutationGroupIndex
    } = props;

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
                {
                    isSaveScumAbled
                        ? <Form.Item label="Current permutation group" style={{ marginBottom: isMobile ? 0 : 24, width: '100%' }}>
                            <InputNumber style={{ width: "100%" }} min={0} max={maxPermutationsGroupCount} defaultValue={0} onChange={onCurrentPermutationGroupChange} value={currentPermutationGroupIndex} />
                        </Form.Item>
                        : false
                }
                <Form.Item label="Current permutation" style={{ width: '100%' }}>
                    <InputNumber style={{ width: "100%" }} min={0} max={maxPermutationsCount} defaultValue={0} onChange={onCurrentPermutationChange} value={currentPermutationIndex} />
                </Form.Item>
            </Space>
            <Space style={{ marginBottom: 15 }}>
                <Switch
                    onChange={onSaveScumChange}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={isSaveScumAbled}
                />
                Save scum permutations
            </Space>
        </Form >
    )
}

export default Customizer