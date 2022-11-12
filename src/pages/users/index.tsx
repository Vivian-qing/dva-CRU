import React,{ useState } from 'react';
import { Space, Table, Tag, Button, Modal, message, Popconfirm} from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';

const index=({ users, dispatch }) =>{

  const [modalVisible,setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);

  const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Create Time',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: 'Action',
        key: 'action',
        // render中的text为当前行的值 record相当于就是单条数据
        render: (text, record) => (
          <span>
            <a onClick={()=>{
                handleClick(record)}}>Edit</a>&nbsp;&nbsp;&nbsp;
            <Popconfirm
                title="确认删除吗?"
                onConfirm={()=>confirmDelete(record.id)}
                okText="确认"
                cancelText="取消"
            >
                <a>Delete</a>
            </Popconfirm>
          </span>
        ),
      },
    ];

    const handleClick = (record)=>{
      setModalVisible(true);
    //   console.log(record)
      setRecord(record);
    }

    const closeHandle = () => {
      setModalVisible(false)
    }

    const onFinish = (values) => {
        let id = 0;
        if (record) {
            id = record.id;
        }
        // const id = record.id
        dispatch({
            type: 'users/edit',
            payload: {
                id,
                values,
            }
        })
        setModalVisible(false)
        // console.log('成功:',values)
    }
        //删除
    const confirmDelete = (id) => {
        // console.log(id)
        dispatch({
            type: 'users/delete',
            payload: {
                id,
            }
        })
    }

    const addHandler = () => {
        setModalVisible(true);
    }
    return (
    <div className='list-table'>
        <Button type='primary' style={{float: 'right'}} onClick={addHandler}>新增</Button>
        <Table columns={columns} dataSource={users.data} rowKey='id'/>
        <UserModal
            open = {modalVisible}
            closeHandle = {closeHandle}
            record={record}
            onFinish={onFinish}
        />
    </div>
    );
};

// 完整写法
// const mapStateToProps = ({users, loading, routes}) => {
//     return {
//         users,
//     };
// };

// 简化写法
const mapStateToProps = ({users}) =>({
  users
});

export default connect(mapStateToProps)(index);