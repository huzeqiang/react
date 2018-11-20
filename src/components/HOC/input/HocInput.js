import React from 'react';

export default (name, { roles }) => (Wrapper) => class HocInput extends React.Component {
    constructor(){
        super()
        this.state={
            err:''
        }
    }

    handleChange(val) {
        
            if(roles.reg.test(val)) {
                this.props.handleChange({
                    [name]: val
                })
                this.setState({err:''})
            } else {
                console.log(roles.msg)
                this.setState({err:roles.err})
            }
    }

    render() {
        let { err } = this.state;
        return (
            <div style={{background: 'red'}}>
                <Wrapper handleChange={(val) => this.handleChange(val)} {...roles}/>
                <div>{ err }</div>
            </div>
        )
    }
}