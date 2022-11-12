import React from 'react';
import { Select, Button, message } from 'antd'
import styles from './index.less';
const { Option } = Select;


const IndexPage = () => {
  const [searchVisible, setSearchVisible] = React.useState(false)
  const menuData = [
    { title: '百度', path: 'https://www.baidu.com' },
    { title: '百度233', path: 'www.baidu.com'},
    { title: '腾讯', path: 'http://qq.com' },
    { title: 'umi', path: 'https://v3.umijs.org/zh-CN'},
  ]
  const option = menuData.map((item) => <Option key={item.path}>{item.title}</Option>);
  
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  const handleChange = (value) => {
    message.info(value);
    // router.push(value)
  };
  return (
    <><div>
      <h1 className={styles.title}>Page index</h1>
    </div>
      <div>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          onChange={handleChange}
          showArrow={false}
          notFoundContent={null}
        >{option}</Select>
        <Button>搜索</Button>
      </div>
    
    </>

  );
}

export default IndexPage;
