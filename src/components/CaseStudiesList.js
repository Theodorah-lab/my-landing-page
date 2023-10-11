import React from "react";

function CaseStudiesList(props){
    const items = props.Items;
    const tempCasestudies = items.map(item => {
        return <Items
            img={item.img}
            title={item.title}
            description={item.description} />
    })

    return(<>{tempCasestudies}</>)
}


function Items(props){
    return(
        <div className="caseStudiesItem">
            <img src={props.img} alt="icon"/>
            <div className={`caseStudiesText`}>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default CaseStudiesList;