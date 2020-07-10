import React from 'react';
import InputItem from '../../components/InputItem';
import { Form } from 'antd';
import styles from './index.module.less'


const Register = () => {
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values)
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
                </Form>
            </div>
        </div>
    )
}

export default Register;