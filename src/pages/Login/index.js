import React from 'react';
import {Tabs} from 'antd';
import { UserOutlined, LockTwoTone } from '@ant-design/icons'
import InputItem from '../../components/InputItem';
import styles from './index.module.less'
const { TabPane } = Tabs;

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab='login with Password' key='1'>
                        <InputItem 
                            prefix = {
                                <UserOutlined style={{color: '#1890ff'}}/>
                            }
                            placeholder="Username"
                            size="large"
                        />
                        <InputItem 
                            prefix = {
                                <LockTwoTone style={{color: '#1890ff'}}/>
                            }
                            placeholder="Password"
                            size="large"
                        />
                    </TabPane>
                    <TabPane tab='login with Phone' key='w'>
                        ad
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Login;