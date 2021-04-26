import {RegionType} from "../../types/types";
import {RegionActionTypes} from "../types/regionTypes";

export interface RegionAction extends RegionState {
    type: RegionActionTypes
}

export interface RegionState{
    data: Array<RegionType>
}

export const initialRegionState : RegionState = {
    data: []
}

const RegionReducer = (state: RegionState = initialRegionState, action: RegionAction) => {
    switch(action.type) {
        case RegionActionTypes.SET_DATA:
            return {...initialRegionState,data: action.data};
        case RegionActionTypes.SET_DATA_SUCCESSFULLY:
            return {...state}
        default:
            return state;
    }
}

export default RegionReducer;