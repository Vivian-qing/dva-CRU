import { request } from 'umi';
import { message } from 'antd';
// async function name(params:type) {
//     // body
// }

const BaseURL='http://public-api-v1.aspirantzhang.com'
// 获取数据
export const getRemoteList = async params => {
    // const data = [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //       tags: ['nice', 'developer'],
    //     },
    //     {
    //       key: '2',
    //       name: 'Jim Green',
    //       age: 42,
    //       address: 'London No. 1 Lake Park',
    //       tags: ['loser'],
    //     },
    //     {
    //       key: '3',
    //       name: 'Joe Black',
    //       age: 32,
    //       address: 'Sidney No. 1 Lake Park',
    //       tags: ['cool', 'teacher'],
    //     },
    //   ];
    //   return data;

    return request('http://public-api-v1.aspirantzhang.com/users', {
        method: 'get',
    })
        .then(function(response) {
            console.log(response);
            return response;
        })
        .catch(function(error) {
            console.log(error);
        });
}


//编辑
export const editRecord = async ({id,values}) => {
    return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'put',
        data: values,
    })
        .then(function(response) {
            message.success('Edit Successfully')
            // return response;
        })
        .catch(function(error) {
            message.error('Edit Failed')
        });
}

//删除
export const deleteRecord = async ({id}) => {
    return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'delete',
    })
        .then(function(response) {
            message.success('Delete Successfully')
        })
        .catch(function(error) {
            message.error('Delete Failed')
        });
}
// export async 