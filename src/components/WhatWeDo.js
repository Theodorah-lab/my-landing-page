import React, {Component} from "react";
import WhatWeDoList from "./WhatWeDoList";
import uxIcon from '../assests/UX Icon.svg'
import icon from '../assests/icon.svg'
import AppDevIcon from '../assests/App Dev Icon.svg'
import webDevicon from '../assests/Web Dev Icon.svg'

class WhatWeDo extends Component{

    constructor(props){
        super(props);
        this.items = [
            {
                img:webDevicon,
                title:"Web development",
                description:"We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
            },
            {
                img:uxIcon,
                title:"User experience & design",
                description:"Our complete web design services will bring your idea so life and provide you with a sleek, high-performing product that elevates your business."
            },
            {
                img:AppDevIcon,
                title:"Mobile development",
                description:"Our extensive mobile development experience Ilows us to create custom ative and cross-platform iOS and Android mobile solutions or our clients."
            },
            {
                img:icon,
                title:"Block chain solutions",
                description:"We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
            }
        ]
    }

    render(){
        return(
            <>
                <div className={`row`}>
                    <div className={`col-sm-1`}></div>
                    <div className={`col-sm-10`}>
                        <div className={`whatWeDoItemContainer`}>
                            <h6>What we do</h6>
                            <h3>
                                <strong>
                                    We offer a complete range of bespoke design and development 
                                    services to help you turn your ideas into digital 
                                    masterpieces
                                </strong>
                            </h3>
                            <WhatWeDoList Items={this.items} />
                        </div>
                    </div>
                    <div className={`col-sm-1`}></div>
                </div>
            </>
        )
    }

}

export default WhatWeDo;