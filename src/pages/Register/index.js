import React , {useState} from 'react';
import InputItem from '../../components/InputItem';
import { Form, Popover, Progress } from 'antd';
import styles from './index.module.less'


const Register = () => {
    const [visible, setVisible] = useState(false);
    const [popover, setPopover] = useState(false);

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

    const checkPassword = (_, value) => {
        const promise = Promise;
        if(!value) {
            setVisible(!!value)
            return promise.reject('Please enter your password')
        }
        if(!visible) {
            setVisible(!!value);
        }
        setPopover(!popover);
        if(value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm'])
        }
        return promise.resolve();
    }

    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        return value && value.length && (
            <div>
                <Progress
                    strokeWidth={6}
                    percent={value.length * 10 > 100 ? 100 : value.length * 10}
                    showInfo={false}
                />
            </div>
        )
    }
    return (
        <div className={styles.registerContainer}>
            <div className={styles.register}>
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
                        content = {
                            visible && (
                                <div>
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
                </Form>
            </div>
        </div>
    )
}

export default Register;