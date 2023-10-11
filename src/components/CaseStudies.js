import React, {Component} from "react";
import CaseStudiesList from "./CaseStudiesList";
import img1 from '../assests/1280x960.png'
import img2 from '../assests/1280x960 (1).png'
import img3 from '../assests/1280x960 (2).png'

class CaseStudies extends Component{

    constructor(props){
        super(props);
        this.items = [
            {
                img:img1,
                title:"The Olympian",
                description:"The only athlete in the world to do her Olympic routine in 2020.              "
            },
            {
                img:img2,
                title:"The Savings Jar",
                description:"Grow your savings treasure and grow your dragon."
            },
            {
                img:img3,
                title:"Skhokho seMali",
                description:"Helping South Africans become #CashCleva with Skhokho and TymeBank."
            }
        ]
    }

    render(){
        return(
            <>
                <div className={`row`}>
                    <div className={`col-sm-1`}></div>
                    <div className={`col-sm-10`}>
                        <div className={`CaseStudiesContainer`}>
                            <h6>Case studies</h6>
                            <CaseStudiesList Items={this.items} />
                        </div>
                    </div>
                    <div className={`col-sm-1`}></div>
                </div>
            </>
        )
    }

}

export default CaseStudies;