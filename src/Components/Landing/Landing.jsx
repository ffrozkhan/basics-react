import React from 'react';
import Navbarm from '../Navbar/Navbarm';
import Classcompo from '../Classcompo/Classcompo'
import DemoClassComp from '../DemoClassComponent/DemoClassComp';
import { UseStateHooks } from '../Header/Hooks/UseStateHooks';
import Body from '../DemoClassComponent/Body';

const Landing = () => {
    return (
        <div>
            <Body/>

            <Navbarm/>
            <Classcompo/>
            <DemoClassComp/>
            <UseStateHooks/>
        </div>
    );
};

export default Landing;