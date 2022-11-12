import { Subscription, Effect, Reducer } from 'umi'
import { getRemoteList, editRecord, deleteRecord } from './service'

interface UserModelType {
    namespace:'users', // 唯一标识名
    state: [],
    reducers:{
        getList: Reducer
    },
    effects:{
        getRemote: Effect,
        edit: Effect,
        delete: Effect,
    },
    subscriptions:{
        setup: Subscription
    },
}

const UserModel: UserModelType = {
    namespace:'users', // 唯一标识名
    state: [],
    // 以下内都为函数
    subscriptions: {
        setup({ dispatch, history }){
            // history.listen((location,action) => {
            //     if( location.pathname === '/users' ) {
            //         dispatch({
            //             type: 'getList',
            //         })
            //     }
            // })
            history.listen(({pathname}) => {
                if( pathname === '/users' ) {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    },
    effects: {
        // 全部变为genreador函数
        // *function_name (action,effects){
        //     //yield put()
        // }
        *getRemote(action, { put ,call}) {
            const data = yield call(getRemoteList);// 用call来连接service里的后端接口
            
              yield put({
                type: 'getList',
                payload: data,
            });
        },
        *edit({payload: {id,values}}, { put ,call}) {
            const data = yield call(editRecord, { id, values });// 用call来连接service里的后端接口
            yield put({
                type: 'getRemote',
            });
        },
        *delete({payload: {id}}, { put ,call}) {
            const data = yield call(deleteRecord, { id });
            yield put({
                type: 'getRemote',
            });
        }
    },
    reducers: {
        getList(state, { payload }) {
            // return newState;
            
            return payload; 
        }
    }

};

export default UserModel;