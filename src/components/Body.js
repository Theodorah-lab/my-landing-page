import React, {Component} from "react";
import logo from '../assests/Hero Image.png'

class Body extends Component{
    render(){
        return(
            <>
            <div className={`row`}>
                <div className={`col-sm-12`}>
                    <div className={`container`}>
                    <img src={logo} alt='hero image' />
                        <div>
                            <h3>Live with Confidence</h3>
                            <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
                            <button className={`view-project`}>View projects</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Body;