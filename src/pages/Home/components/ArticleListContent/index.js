import React from 'react';
import {Avatar} from 'antd'
const ArticleListContent = ({
    data: {content, avatar}
})=>(
    <div>
        <div>{content}</div>
        <div>
            <Avatar src={avatar} size="small" />
        </div>
    </div>
)
export default ArticleListContent;