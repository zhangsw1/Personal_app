import React, { useState } from 'react';
import { Row, Col, Card, Divider, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import {ContactsOutlined, ClusterOutlined, HomeOutlined} from '@ant-design/icons';
import Articles from './components/Articles/index.js';
import Projects from './components/Projects';
import Applications from './components/Applications';
import TagList from './components/TagList'
import { currentUser, fakeList } from './data';
import styles from './index.module.less';


const articleList=fakeList(10);
const applicationList = fakeList(10)
const operationTabList = [{
    key: 'articles',
    tab: (
        <span>
            Articles <span>(8)</span>
        </span>
    )
},{
    key: 'applications',
    tab: (
        <span>
            Applications <span>(8)</span>
        </span>
    )
},{
    key: 'projects',
    tab: (
        <span>
            Projects <span>(8)</span>
        </span>
    )
}];

const renderChildrenByTabKey = (tabKey) => {
    switch (tabKey){
        case 'projects':
            return <Projects />
        case 'applications':
            return <Applications list={applicationList}/>
        case 'articles':
        default:
            return <Articles list={articleList}/>
    }
}

const renderUserInfo = () => (
    <div className={styles.detail}>
        <p>
            <ContactsOutlined className={styles.userInfoIcon} />
            {currentUser.title}
        </p>
        <p>
            <ClusterOutlined className={styles.userInfoIcon} />
            {currentUser.group}
        </p>
        <p>
            <HomeOutlined className={styles.userInfoIcon} />
            {(currentUser.geographic || {province: {lable: ''}}).province.label}
            {(currentUser.geographic || {city: {lable: ''}}).city.label}
        </p>
    </div>
)


const Home = () => {
    const [tabKey, setTabKey] = useState('articles');
    const onTabChange = (key) => {
        setTabKey(key);
    }
    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{marginBottom: 24}}>
                        <div className={styles.avatarHolder}>
                            <img alt="" src={currentUser.avatar} />
                            <div className={styles.name}>
                                {currentUser.name}
                            </div>
                            <div>
                                {currentUser.signature}
                            </div>
                        </div>
                        {renderUserInfo(currentUser)}
                        <Divider dashed />
                        <TagList tags={currentUser.tags}/>
                        <div className={styles.team}>
                            <div className={styles.teamTitle}>Team</div>
                            <Row gutter={36}>
                                {
                                    currentUser.notice && 
                                    currentUser.notice.map((item) => (
                                        <Col key={item.id} lg={24} xl={12}>
                                            <Link to="/setting">
                                                <Avatar size="small" src={item.logo} />
                                                {item.member}
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col lg={17} md={24}>
                    <Card 
                        bordered={false}
                        tabList={operationTabList}
                        activeTabKey={tabKey}
                        onTabChange={onTabChange}
                    >
                        {renderChildrenByTabKey(tabKey)}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;