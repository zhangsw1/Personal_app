import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Tabs, Form, Checkbox, Row} from 'antd';
import { UserOutlined, LockTwoTone, MobileTwoTone, MailTwoTone, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'redux-react-hook';
import InputItem from '../../components/InputItem';
import Submit from '../../components/SubmitButton';
import { login } from '../../actions/account';

import styles from './index.module.less'
const { TabPane } = Tabs;

const Login = () => {
    const dispatch = useDispatch();
    const [autoLogin, setAutoLogin] = useState(true);
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        dispatch(login(values));
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form 
                 form = {form}
                 onFinish={handleFinish}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab='Login with Password' key='1'>
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
                        <TabPane tab='Login with Phone' key='w'>
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
                                placeholder="Code"
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
                    <Row justify="space-between">
                        <Checkbox 
                        checked={autoLogin}
                        onChange={(e)=>setAutoLogin(e.target.checked)}
                        >
                         Auto login
                        </Checkbox>
                        <a href="#">Forgot password</a>
                    </Row>
                    <Submit>Login</Submit>
                </Form>
                <div className={styles.other}>
                    Other Login: 
                    <GithubOutlined className={styles.icon} />
                    <MailOutlined className={styles.icon} />
                    <Link className={styles.register} to="/register">
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;