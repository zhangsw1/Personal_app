import React, { useState } from 'react';
import {Tag, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import styles from './index.module.less'
const TagList = ({tags}) => {
    const [inputVisible, setInputVisible] = useState(false)
    const showInput = () => {
        setInputVisible(true);
    }
    return (
        <div className={styles.tagsTitle}>
            <div>Tags</div>
            {(tags || []).map((item)=>(
                <Tag key={item.key}>{item.label}</Tag>
            ))}
            {
                inputVisible && 
                <Input
                    size="small"
                    style={{width: 78}}
                />
            }
            { !inputVisible &&
            <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
                <PlusOutlined />
            </Tag>
            }

        </div>
    )

}
export default TagList;