import React from 'react';
import Navbarm from '../Navbar/Navbarm';
import Classcompo from '../Classcompo/Classcompo'
import DemoClassComp from '../DemoClassComponent/DemoClassComp';
import { UseStateHooks } from '../Header/Hooks/UseStateHooks';

const Landing = () => {
    return (
        <div>
            <Navbarm/>
            <Classcompo/>
            <DemoClassComp/>
            <UseStateHooks/>
        </div>
    );
};

export default Landing;