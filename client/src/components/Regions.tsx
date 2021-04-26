import React, {useEffect, useState} from 'react';
import {StyledTable, TableWrapper} from './style';
import Trow from "./Trow/Trow";
import {tHeaders} from "../helpers/tableheader";
import {useDispatch, useSelector} from "react-redux";
import regionActions from "../redux/Actions/regionAction"
import {RootState} from "../redux/Reducers";
import {RegionState} from "../redux/Reducers/regionReducer";
import Loader from "./Loader/Loader";


const Regions: React.FC = () => {
    const dispatch = useDispatch();
    const {data} = useSelector<RootState, RegionState>((state) => state.regions)

    useEffect(() => {
        dispatch(regionActions.getDataAsync())
    }, [])



    if (!data.length) {
        return <Loader/>;
    }


    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                <tr>
                    {tHeaders.map(({filed}) => <th>{filed}</th>)}
                </tr>
                </thead>
                <tbody>
                {data && data.map((rg) => (
                    <Trow
                        key={rg.DISTRICT_ID}
                        data={rg}
                        headers={tHeaders}
                    />
                ))}
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default Regions;