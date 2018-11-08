import React from 'react'
import { connect } from 'react-redux'
import action from '../../redux/users/action';

@connect(
    state => state.counter,
    {
        ...action
    }
)
 class Page3 extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    click(){
        this.props.loginState()
    }

    render(){
        console.log(this.props.loginData.data)
        return(
            <div>
                <button onClick={()=>this.click()}>123123</button>
            </div>
        )
    }
}
export default Page3