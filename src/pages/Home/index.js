import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './index.module.less';

const Home = () => {
    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{marginBottom: 24}}>
                    lala
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card 
                        bordered={false}
                        tabList={[{
                            key: 'articles',
                            tab: (
                                <span>
                                    Articles <span>8</span>
                                </span>
                            )
                        },{
                            key: 'applications',
                            tab: (
                                <span>
                                    Applications <span>8</span>
                                </span>
                            )
                        },{
                            key: 'projects',
                            tab: (
                                <span>
                                    Projects <span>8</span>
                                </span>
                            )
                        }
                        ]}
                    >
                    heihei
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;