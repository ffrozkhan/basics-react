import React, {Component} from "react";

class DemoClassCompChild extends Component {
    render(){
        return(
            <div>
                <h1> Taking Data From This Component's Parent </h1>
                <p> This is {this.props.person} Learning and Development Centre </p>
                <p> This is old practice used only for old projects  </p>
            </div>
        )
    }
}
export default DemoClassCompChild;