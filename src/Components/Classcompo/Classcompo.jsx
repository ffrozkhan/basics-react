import React, {Component} from 'react';
import ClassCompoChild from './ClassCompoChild';

class Classcompo extends Component {
    state = {
        personName:"Shoeb",
    };
    render(){
        return(
            <div>
                <h1> Lorem Para </h1>
                <h2> This is Class Component </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non. </p>
                <ClassCompoChild person={this.state.personName} />
            </div>
        )
    }

}
export default Classcompo;
