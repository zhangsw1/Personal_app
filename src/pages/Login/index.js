import React from 'react';
import { Tabs, Form } from 'antd';
import { UserOutlined, LockTwoTone, MobileTwoTone, MailTwoTone } from '@ant-design/icons'
import InputItem from '../../components/InputItem';
import Submit from '../../components/SubmitButton';
import styles from './index.module.less'
const { TabPane } = Tabs;

const Login = () => {
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values)
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form 
                 form = {form}
                 onFinish={handleFinish}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab='login with Password' key='1'>
                            <InputItem 
                                name="username"
                                prefix = {
                                    <UserOutlined style={{color: '#1890ff'}}/>
                                }
                                placeholder="Username"
                                size="large"
                                rules = {[
                                    {
                                        required: true,
                                        message: "Please enter your username"
                                    }
                                ]}
                            />
                            <InputItem 
                                name="password"
                                prefix = {
                                    <LockTwoTone style={{color: '#1890ff'}}/>
                                }
                                placeholder="Password"
                                size="large"
                                type="password"
                                rules = {[
                                    {
                                        required: true,
                                        message: "Please enter your password"
                                    }
                                ]}
                            />
                        </TabPane>
                        <TabPane tab='login with Phone' key='w'>
                        <InputItem 
                                name="Cell"
                                prefix = {
                                    <MobileTwoTone />
                                }
                                placeholder="Phone Number"
                                size="large"
                                rules = {[
                                    {
                                        required: true,
                                        message: "Please enter your phone number"
                                    }
                                ]}
                            />
                            <InputItem 
                                name="captcha"
                                prefix = {
                                    <MailTwoTone style={{color: '#1890ff'}}/>
                                }
                                placeholder="Password"
                                size="large"
                                type="password"
                                rules = {[
                                    {
                                        required: true,
                                        message: "Please enter your password"
                                    }
                                ]}
                            />
                        </TabPane>
                    </Tabs>
                    <Submit>Login</Submit>
                </Form>
            </div>
        </div>
    )
}

export default Login;