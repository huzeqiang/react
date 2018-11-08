import * as types from '../types';
import utils from '../../utils.js';
import User from '../../request/login.req'
const user = new User()
export default {
    login(val){
        return async (dispatch) => {
           const data = await utils.result(user.login(val))
           if(data.token) localStorage.setItem('token',data.token)
            dispatch({
                type: types.LOGIN,
                paload:{...data}
            })
        }
    },
    loginState(){
        return async (dispatch) => {
            const data = await utils.result(user.loginState())
            console.log(data)
            dispatch({
                type:types.LOGINSTATUS,
                paload:{data}
            })
        }
    }
}