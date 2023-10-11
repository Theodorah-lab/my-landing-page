import React from "react";

function WhatWeDoList(props){
    const items = props.Items;
    const tempWhatWeDoItem = items.map(item => {
        return <Items
            img={item.img}
            title={item.title}
            description={item.description} />
    })

    return(<>{tempWhatWeDoItem}</>)
}


function Items(props){
    return(
        <div className="whatWeDoItem">
            <img src={props.img} alt="icon"/>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}
export default WhatWeDoList;