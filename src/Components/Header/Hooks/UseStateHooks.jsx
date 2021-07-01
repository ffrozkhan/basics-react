import React, {useState} from "react";

export const UseStateHooks =()=>{
    const [person, setPerson]=useState(0);
    const handleAddition = () =>{
        setPerson(person + 1);
    };
    return(
        <div>
            <h2> {person} </h2>
            <button onClick={handleAddition}>Increment</button>
            <button onClick={()=> setPerson(person - 1)}>Decrement</button>
        </div>

    )
}