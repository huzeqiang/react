import React from 'react'
import './index.css'
import img1 from '../../imgs/1.png'
import img3 from '../../imgs/3.png'
export default class Page1 extends React.Component {
    constructor() {
        super()
        this.state = {
            offOn: true,
        }
    }

    click() {
        let { offOn } = this.state;
       
       console.log(offOn)
        this.setState({ offOn:false }, () => {
            if (offOn) {
                offOn = !offOn;
                this.ratating()            
            }
        })
        
    }
    ratating() {
        let { offOn } = this.state;
        let oTurntable = document.querySelector('.img3')
        let cat = 51.4;
        let num = 0;
        let timer = null;
        let rdm = 0; //随机度数
        let that = this;
        clearInterval(timer);
        timer = setInterval(function () {
            if (Math.floor(rdm / 360) < 3) {
                rdm = Math.floor(Math.random() * 3600);
            } else {
                oTurntable.style.transform = "rotate(" + rdm + "deg)";
                clearInterval(timer);
                setTimeout(function () {
                    that.setState({ offOn: !offOn })
                    num = rdm % 360;
                    let o = {
                        0: () => alert("4999元"),
                        1: () => alert("50元"),
                        2: () => alert("10元"),
                        3: () => alert("5元"),
                        4: () => alert("免息服务"),
                        5: () => alert("提交白金"),
                        6: () => alert("未中奖"),
                    }
                    o[Math.floor(num/cat)]()
                }, 4000);
            }
        }, 30);

    }

    render() {
        return (
            <div>
                Page1
                <div className='bgdiv'>
                    <img className="img1" src={img1} alt="pointer" onClick={() => { this.click() }} />
                    <img className="img3" src={img3} alt="turntable" />

                </div>
            </div>
        )
    }
}