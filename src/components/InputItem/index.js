import React from 'react';
import {Input, Form, Button, Row, Col} from 'antd';
import styles from './index.module.less'

const InputItem = (props) => {
    const { name, rules, ...rest } = props;
    if(name === 'captcha') {
        return (
            <Form.Item name={name} rules={rules}>
                <Row gutter={8}>
                    <Col span={16}>
                        <Input {...rest} />
                    </Col>
                    <Col span={8}>
                        <Button className={styles.getCaptcha} size="large">Retrieve code</Button>
                    </Col>
                    
                </Row>
            </Form.Item>
        )
    }
    return (
        <Form.Item name={name} rules={rules}>
            <Input {...rest} />
        </Form.Item>
    )
}

export default InputItem;