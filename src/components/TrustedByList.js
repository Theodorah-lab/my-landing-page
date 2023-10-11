import React from "react";

function TrustedByList(props){
    const items = props.Items;
    const tempTrustedByItem = items.map(item => {
        return <Items img={item.img}/>
    })

    return(<>{tempTrustedByItem}</>)
}


function Items(props){
    return(
        <div className="TrustedByItem">
            <img src={props.img} alt="icon"/>
        </div>
    )
}
export default TrustedByList;