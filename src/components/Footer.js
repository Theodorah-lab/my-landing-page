import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <div className={`row footer`}>
                    <div className={`col-sm-1`}></div>
                    <div className={`col-sm-10`}>
                    
                        <div className={`footer1`}>
                            <h6>Contct us</h6>

                            <div>
                                Have a project in mind? <br/>Let's make it happen
                            </div>
                            <p>
                                22 Street Name, Suburb, 8000, <br />Cape Town, South Africa <br />+27 21 431 0001 <br />enquirie@website.co.za
                            </p>
                        </div>
                    </div>
                    <div className={`col-sm-1`}></div>

                </div>

                <div className={`row footer`}>
                    <div className={`col-sm-1`}></div>
                    <div className={`col-sm-10`}>
                        <div className={`footer2`}>
                            <ul>
                                <li>Terms of services</li>
                                <li>Privacy policy</li>
                                <li>Impressum</li>
                            </ul>
                            <ul>
                                <li>Terms of services</li>
                                <li>Privacy policy</li>
                                <li>Impressum</li>
                            </ul>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                            </ul>
                            <ul>
                                <li>Github</li>
                                <li>Linkedin</li>
                                <li>Teams</li>
                            </ul>
                            <ul>
                                <li>Youtube</li>
                                <li>Bahance</li>
                                <li>Dribble</li>
                            </ul>
                            <ul>
                                <li>Explore open jobs</li>
                                <br/>
                                <li>©2000-2023 Compnay name</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-sm-1`}></div>

                </div>
            </>
        )
    }
}

export default Footer;