import React from 'react';
import '../Components/LearningCss.css';
const LearningCss=()=>{
    const stylePara={
            backgroundColor: "teal", 
            color: "white",
            borderRadius: "25px",
            
        };
        return(
        <div>
            <h1 style={{color: "red"}}>  Learning Css in React JS </h1>
            <p style={stylePara}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit laboriosam iste veniam libero esse harum illum voluptas facere tempora.</p>
            <p2 className="afroz">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corporis.</p2>
        </div>
    )
}
export default LearningCss;