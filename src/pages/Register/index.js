import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import InputItem from '../../components/InputItem';
import { Form, Popover, Progress, Row, Col, Select } from 'antd';
import styles from './index.module.less'
import SubmitButton from '../../components/SubmitButton';

const { Option } = Select;


const passwordStatusMap = {
    ok: (
        <div className={styles.success}>
            Level: Strong
        </div>
    ),
    pass: (
        <div className={styles.warning}>
            Level: Normal
        </div>
    ),
    poor: (
        <div className={styles.error}>
            Level: Weak
        </div>
    )
}

const passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: 'exception',
}


const Register = () => {
    const [visible, setVisible] = useState(false);
    const [popover, setPopover] = useState(false);
    const [prefix, setPrefix] = useState('01')
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values)
    }
    const checkConfirm = (_, value) => {
        const promise = Promise;
        if(value && value !== form.getFieldValue('password')){
            return promise.reject('Password do not match')
        }
        return promise.resolve();
    }

    const getPasswordStatus = () => {
        const value = form.getFieldValue('password');
        if(value && value.length > 9){
            return 'ok'
        }
        if(value && value.length > 5) {
            return 'pass'
        }
        return 'poor'
    }

    const checkPassword = (_, value) => {
        const promise = Promise;
        if(!value) {
            // if there is no value, no need to be visible
            setVisible(!!value)
            return promise.reject('Please enter your password')
        }
        if(!visible) {  // visible = false !visible = true
            setVisible(!!value);
        }
        // if there a value, state needs to change constantly
        setPopover(!popover);
        if(value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm'])
        }
        return promise.resolve();
    }

    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        const passwordStatus = getPasswordStatus();
        return value && value.length && (
            <div className={styles[`progress-${passwordStatus}`]}>
                <Progress
                    className={styles.progress}
                    status={passwordProgressMap[passwordStatus]}
                    strokeWidth={7}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        )
    }
    return (
        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <h1>Register Account</h1>
                <Form
                    form={form}
                    onFinish={handleFinish}
                >
                    <InputItem
                        name="mail"
                        placeholder="Email"
                        size="large"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email"
                            },
                            {
                                type: 'email',
                                message: 'Please enter valid email address'
                            }
                        ]}
                    />
                    <Popover 
                        getPopupCountainer = {(node)=>{
                            if(node && node.parentNode) {
                                return node.parentNode;
                            }
                            return node;
                        }}
                        content = {
                            visible && (
                                
                                <div>
                                    {passwordStatusMap[getPasswordStatus()]}
                                    {renderPasswordProgress()}
                                    <div>
                                        <h3>Passwords must be at least 10 characters in length, but can be much longer</h3>

                                    </div>
                                </div>
                            )
                        }
                        overlayStyle = {{width: 240}}
                        placement="right"
                        visible={visible}
                    >
                        <InputItem 
                            name="password"
                            placeholder="Password"
                            size="large"
                            type="password"
                            rules = {[
                                {
                                    required: true,
                                    message: "Please enter your password"
                                },
                                {
                                    validator: checkPassword,
                                }
                            ]}
                        />
                    </Popover>
                    <InputItem 
                        name="confirm"
                        placeholder="Confirm your password"
                        size="large"
                        type="password"
                        rules = {[
                            {
                                required: true,
                                message: "Please confirm your password"
                            },
                            {
                                validator: checkConfirm,
                            }
                        ]}
                    />
                    <Row>
                        <Col span={6}>
                            <Select
                            size="large"
                            value={prefix}
                            onChange={(value)=>setPrefix(value)}
                            style={{ width: "100%"}}
                            >
                            <Option value="01">+01</Option>
                            <Option value="86">+86</Option>
                            </Select>
                        </Col>
                        <Col span={18}>
                        <InputItem 
                            name="mobile"
                            placeholder="Phone Number"
                            size="large"
                            rules = {[
                                {
                                    required: true,
                                    message: "Please enter your phone number"
                                },
                                {
                                    pattern: /^\d{11}$/,
                                    message: "phone number is not valid"
                                }
                            ]}
                        />
                        </Col>

                    </Row>
                    <Row justify="space-between" align="middle">
                        <Col span={8}>
                            <SubmitButton>Register</SubmitButton>
                        </Col>
                        <Col span={16}>
                            <Link className={styles.login} to="/login">
                                Login
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default Register;