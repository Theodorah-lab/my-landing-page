import React, {Component} from "react";
import img1 from '../assests/visa-black.svg'
import img2 from '../assests/tyme-bank-black.svg'
import img3 from '../assests/distell-black 1.svg'
import img4 from '../assests/spotify-black 1.svg'
import img5 from '../assests/microsoft-black 1.svg'
import img6 from '../assests/engen-black 1.svg'
import img7 from '../assests/nike-black 1.svg'
import img8 from '../assests/wesgrow-black 1.svg'
import img9 from '../assests/multichoice-black 1.svg'
import img10 from '../assests/pnp-black 1.svg'
import img11 from '../assests/liquid.svg'
import img12 from '../assests/tfg-black 1.svg'
import img13 from '../assests/sanlam-black 1.svg'
import img14 from '../assests/santam-black 1.svg'
import img15 from '../assests/bbc-black 1.svg'
import TrustedByList from "./TrustedByList";

class TrustedBy extends Component{

    constructor(props){
        super(props);
        this.items = [
            {img:img1},
            {img:img2},
            {img:img3},
            {img:img4},
            {img:img5},
            {img:img6},
            {img:img7},
            {img:img8},
            {img:img9},
            {img:img10},
            {img:img11},
            {img:img12},
            {img:img13},
            {img:img14},
            {img:img15},
        ]
    }

    render(){
        return(
            <>
                <div id="industries" className={`row`}>
                    <div className={`col-sm-1`}></div>
                    <div className={`col-sm-10`}>
                        <div className={`trustedByItemContainer`}>
                            <h6 className={`sectionHeading`}>You'll be in good company</h6>
                            <h3>
                                <strong>Trusted by leading brands</strong>
                            </h3>
                            <TrustedByList Items={this.items} />
                        </div>
                    </div>
                    <div className={`col-sm-1`}></div>
                </div>
            </>
        )
    }

}

export default TrustedBy;