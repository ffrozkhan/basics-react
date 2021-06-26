import React, {Component} from "react";

class ClassCompoChild extends Component {
    render(){
        return(
            <div>
                <h1> This is Class Component's Child </h1>
                <p> {this.props.person} this name is taken from parent compo. </p>
            </div>
        )
    }

}

export default ClassCompoChild;