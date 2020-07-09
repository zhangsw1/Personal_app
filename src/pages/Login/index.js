import React from 'react';
import {Tabs} from 'antd';
import styles from './index.module.less'
const { TabPane } = Tabs;

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab='login with Password' key='1'>
                        addf
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