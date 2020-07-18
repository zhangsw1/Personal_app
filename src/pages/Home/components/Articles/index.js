import React from 'react';
import { List, Tag } from 'antd';
import styles from './index.module.less'
import {StarTwoTone, MessageFilled, LikeOutlined} from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <span>
        {icon} {text}
    </span>
)

const Articles = ({ list }) => {
    return (
        <List
            size="large"
            className={styles.articleList}
            rowKey="id"
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item)=>(
                <List.Item
                    key={item.id}
                    actions={[
                        <IconText key="star" icon={<StarTwoTone />}
                        text={item.start} />,
                        <IconText key="star" icon={<LikeOutlined />}
                        text={item.like} />,
                        <IconText key="star" icon={<MessageFilled />}
                        text={item.message} />,
                    ]}
                >
                    <List.Item.Meta
                        title={
                            <a className={styles.listItemMetaTitle} href={item.href}>
                                {item.title}
                            </a>
                        }
                        description={
                            <span>
                                <Tag>Ant Design</Tag>
                                <Tag></Tag>
                            </span>
                        }
                    />
                    <ArticleListContent data={item} />
                </List.Item>
            )}
        />
    )
}
export default Articles;