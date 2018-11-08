import React from 'react';
import { connect } from 'react-redux'
import action from '../../redux/users/action'


@connect(
    state => state.counter,
    {
        ...action
    }
)
class Page2 extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    click(){
        console.log(11111)
        this.props.login({
            userName:"胡强",
            password:'123456'
        })
       
    }
    componentDidMount(){
        console.log(this.props.userData)
    }


    render() {
        console.log(this.props.userData)
        return (
            <div>
                Page2
                <div>{this.props.userData.userName}</div>
                <button onClick={()=>this.click()}>123</button>
            </div>
        )
    }
}

export default Page2
