import React, {Component} from "react";
import DemoClassCompChild from "./DemoClassCompChild";

class DemoClassComp extends Component {
    state = {
        personName: "PickUpBiz",
    };
    render(){
        return(
            <div>
                <h1> This is Demo Class Component </h1>
                <p> Lorem ipsum dolor sit amet. </p>
                <DemoClassCompChild person={this.state.personName} />
            </div>
        );
    }
}
export default DemoClassComp;