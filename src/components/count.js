import React from 'react'

export default class Count extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: props.count,
        }
    }

    add(){
        let {...msg} = this.props;
        msg.count += 1;

        this.props.handleClick(msg)
        
        // this.setState({ count: count+1 })
    }
    reduce(){
        let {...msg} = this.props;
        msg.count -= 1;
        if(msg.count<=0){
            msg.count = 0 
        }

        this.props.handleClick(msg)
    }
    huandleChange(e){
        let {...msg} = this.props;
            msg.count = e.target.value?e.target.value:0
        this.props.handleClick(msg)
        // console.log(e.target.value)
    }
    render(){
        let {...item} = this.props
        return(
            <div>
                <div>{item.name}</div>
                <div><button onClick = {()=>this.add()}>+</button></div>
                <div>
                    {item.count}
                    <input  value={item.count} onChange = {(e)=>this.huandleChange(e)} />
                </div>
                <div><button onClick = {()=>this.reduce()}>-</button></div>
            </div>
        )
    }
}