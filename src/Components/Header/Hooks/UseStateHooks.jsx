import React, {useState} from "react";

export const UseStateHooks =()=>{
    const [data, setData]=useState("<===This is from Child===>");
    const [strData, SetStrData]=useState("This is a String");


    console.log(data);
    return(
        <div>
            <h1>This is UseState Hook {strData}</h1>
        </div>

    )
}