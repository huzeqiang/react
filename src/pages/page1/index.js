import React from 'react'
import './index.css'
import img1 from '../../imgs/1.png'
import img3 from '../../imgs/3.png'
export default class Page1 extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        return(
            <div>
                Page1
                <div className='bgdiv'>
                    <img className="img1" src={img1} alt="pointer"/>
                    <img className="img3" src={img3} alt="turntable"/>

                </div>
            </div>
        )
    }
}