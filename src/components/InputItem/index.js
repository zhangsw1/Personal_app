import React from 'react';
import {Input, Form} from 'antd';

const InputItem = (props) => {
    return (
        <Form.Item>
            <Input {...props} />
        </Form.Item>
    )
}

export default InputItem;