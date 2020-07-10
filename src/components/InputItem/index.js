import React, { useState, useEffect } from 'react';
import { Input, Form, Button, Row, Col, message } from 'antd';
import styles from './index.module.less'

const InputItem = (props) => {
    const { name, rules, ...rest } = props;
    const [timing, setTiming] = useState(false); // state represent if is counting down
    const [count, setCount] = useState(props.countDown || 60); // counting down with seconds
    const handleClickCaptcha = () => {
        message.success("Succefully received code 1234")
        setTiming(true);
    }

    useEffect(()=>{
        let interval = 0;
        if(timing){
            interval = window.setInterval(()=>{
                setCount((preSecond)=>{
                    if(preSecond <= 1){
                        setTiming(false); // counting down finished
                        clearInterval(interval);
                        return props.countDown || 60;
                    }
                    return preSecond - 1;
                })
            }, 1000)
        }
        return () => clearInterval(interval);
    }, [timing]);

    if(name === 'captcha') {
        return (
            <Form.Item name={name} rules={rules}>
                <Row gutter={8}>
                    <Col span={16}>
                        <Input {...rest} />
                    </Col>
                    <Col span={8}>
                        <Button 
                            className={styles.getCaptcha}
                            disabled={timing} 
                            size="large"
                            onClick={handleClickCaptcha}
                        >
                        { timing ? `${count}s` : 'Retrieve code'}
                        </Button>
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