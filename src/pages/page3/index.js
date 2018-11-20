import React from 'react'
import { connect } from 'react-redux'
import action from '../../redux/users/action';
import HocHeader from '@/components/HOC/HocHeader'
import Input from '@/components/HOC/input/input';
import HocInput from '@/components/HOC/input/HocInput';
import Count from '@/components/count';

const NumberInput =  HocInput('amount', {
    roles: {
        reg: /^[0-9]*$/, 
        required: true, 
        msg: '请输入数字',
        err: '数字格式不正确',
    }
})(Input)
const TelInput =  HocInput('tel', {
    roles: {
        reg: /^1[34578]\d{9}$/,
        required: true, 
        msg: '请输入电话号码',
        err: '号码格式不正确',
    }
})(Input)
@connect(
    state => state.counter,
    {
        ...action
    }
)
@HocHeader(['baidu', 'go', 'back'])
 class Page3 extends React.Component{
    constructor(){
        super()
        this.state={
            userVal:{},
            list:[
                {
                    id:1,
                    count:0,
                    name:'辣条'
                },{
                    id:2,
                    count:0,
                    name:'锅巴'
                },{
                    id:3,
                    count:0,
                    name:'面包'
                },{
                    id:4,
                    count:0,
                    name:'酸奶'
                },
            ]
        }
    }

    handleChange = (obj) => {
        let { userVal } = this.state
        this.setState({userVal:{...userVal, ...obj}})
        console.log('我是数字：', obj)
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.userVal.amount);
        event.preventDefault();
    }

    click(){
        this.props.loginState()
        const promise = new Promise((resolve,reject) =>{
            resolve('success1');
            reject('error')
            resolve('success2');
        })
        promise.then((res) => {
            console.log('then',res)
        }).catch((err)=>{
            console.log('error',err)
        })
    }
    handleClick = ( itm ) => {
        let { list } = this.state;
        console.log(list)
        list.map( item => {
            if(item.id === itm.id){
                item.count = itm.count;
                this.setState({list})
            }
        })
    }
    render(){
        let { list } = this.state;
        return(
            <div>
                <button onClick={()=>this.click()}>123123</button>
                <form onSubmit={this.handleSubmit}>
                    <NumberInput handleChange={this.handleChange}/>
                    <TelInput handleChange={this.handleChange}/>
                    <input type="submit"/>

                </form>
                <div style = {{display:'flex' }}>
                    {
                        list.map((item,index) =>(
                            <Count 
                                key={index} 
                                {...item} 
                                handleClick={this.handleClick}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Page3