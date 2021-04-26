import React from 'react';
import Regions from "../components/Regions";
import Navbar from "../components/Navbar/Navbar";

const Main: React.FC<{}> = ({}) => {


    return (
        <>
            <Navbar/>
            <Regions/>
        </>


    );
};

export default Main;