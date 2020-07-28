import React, { useState, useEffect } from 'react';
import { Input, Form, Button, Row, Col, message } from 'antd';
import styles from './index.module.less'

const InputItem = React.forwardRef((props, ref) => {
    const { name, rules, onClick, ...rest } = props;
    const [timing, setTiming] = useState(false); // state represent if is counting down
    const [count, setCount] = useState(props.countDown || 10); // counting down with seconds

    useEffect(()=>{
        let interval = 0;
        if(timing){
            interval = window.setInterval(()=>{
                setCount((preSecond)=>{
                    if(preSecond <= 1){
                        setTiming(false); // counting down finished
                        clearInterval(interval);
                        return props.countDown || 10;
                    }
                    return preSecond - 1;
                })
            }, 1000)
        }
        return () => clearInterval(interval);
    }, [timing, props.countDown]);

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
                            onClick={onClick}
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
            <Input ref={ref} {...rest} />
        </Form.Item>
    )
});

export default InputItem;