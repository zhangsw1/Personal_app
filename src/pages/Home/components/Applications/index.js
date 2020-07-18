import React from 'react';
import { List, Card, Tooltip, Dropdown, Menu,Avatar }from 'antd';
import { DownloadOutlined, EditOutlined, ShareAltOutlined, EllipsisOutlined } from '@ant-design/icons'
import numeral from 'numeral';
import styles from './index.module.less';

const itemMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                3rd menu item
            </a>
        </Menu.Item>              

    </Menu>
) 

const CardInfo = ({activeUser,newUser}) => (
    <div className={styles.cardInfo}>
        <div>
            <p>Active User</p>
            <p>{activeUser}</p>
        </div>
        <div>
            <p>New User</p>
            <p>{newUser}</p>
        </div>
    </div>
)

function formatWan(val) {
    const v = val * 1;
    if(!v || Number.isNaN(v)) {
        return ""
    }
    let result = val;
    if(val > 1000) {
        result = (
            <span>
                {Math.floor(val / 1000)}{" "}
                <span>
                     thousands
                </span>

            </span>
        )
    }
    return result
}

const Applications = ({list}) => {
    return (
        <List
            className={styles.filterCardList}
            rowKey="id"
            grid={{ gutter: 24 , xxl: 3, xl: 2, lg: 2, md:2, sm: 2, xs: 1}}
            dataSource={list}
            renderItem={(item)=>(
                <List.Item
                    key={item.id}
                >
                    <Card
                        hoverable
                        bodyStyle={{ paddingBottom: 20 }}
                        actions={[
                            <Tooltip key="download" title="Download">
                                <DownloadOutlined />
                            </Tooltip>,
                            <Tooltip key="edit" title="Edit">
                                <EditOutlined />
                            </Tooltip>,
                             <Tooltip key="share" title="Share">
                                <ShareAltOutlined />
                            </Tooltip>,
                            <Dropdown overlay={itemMenu} key="ellipsis">
                              <EllipsisOutlined />
                            </Dropdown>                                                      
                        ]}
                    >
                    <Card.Meta 
                    avatar={<Avatar size="small" src={item.avatar} />}
                    title={item.title}
                    />
                    </Card>
                    <div>
                        <CardInfo
                        activeUser={formatWan(item.activeUser)}
                        newUser={numeral(item.newUser).format('0,0')}
                        />
                    </div>


                </List.Item>
            )}
        />
    )
}
export default Applications;