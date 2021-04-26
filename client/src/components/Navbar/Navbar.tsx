import React from 'react';
import { StyledNavbar } from './style';
import Wrapper from "../Wrapper";
import {useDispatch} from "react-redux";
import regionActions from "../../redux/Actions/regionAction"
import Button from "../Button/Button";

const Navbar:React.FC = ({}) => {
    const dispatch = useDispatch()

    const loadData = ()=> {
        dispatch(regionActions.setDataAsync())
    }
    return (
        <StyledNavbar>
            <Wrapper variant={"regular"}>
                <span style={{color: "#ffff", marginRight: "50px"}}>Table</span>
                <Button onClick={()=> loadData()}>Отримати дані</Button>
            </Wrapper>
        </StyledNavbar>
    );
};

export default Navbar;