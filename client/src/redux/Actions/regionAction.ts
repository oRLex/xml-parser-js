import {RegionActionTypes} from "../types/regionTypes";
import {initialRegionState, RegionAction} from "../Reducers/regionReducer";
import {ThunkAction} from "redux-thunk";
import {randomNumbers} from "../../utils/randomNumbers";
import {fetchData} from "../../utils/fetchData";
import {parse} from "../../utils/parse";
import FirebaseService, {FirebaseResponseType} from "../../services/FirebaseService";
import {RootState} from "../Reducers";
import {RegionType} from "../../types/types";

function setData(data: Array<RegionType>): RegionAction {
    return {...initialRegionState, type: RegionActionTypes.SET_DATA, data: data};
}

function setDataSuccessfully(): RegionAction {
    return {...initialRegionState, type: RegionActionTypes.SET_DATA_SUCCESSFULLY,};
}


const setDataAsync = (): ThunkAction<Promise<void>, RootState, any, RegionAction> => async dispatch => {
    const numbers = randomNumbers(5);
    const data: Array<string> = await fetchData(numbers);
    if (!data) {
        throw new Error("can not fetch data")
    }
    const parsed: Array<RegionType> = parse(data)
    if (!parsed) {
        throw new Error("can not parse data from server")
    }
    await FirebaseService.create(parsed);
    dispatch(setDataSuccessfully())
    return dispatch(getDataAsync())
}


const getDataAsync = (): ThunkAction<Promise<void>, RootState, any, RegionAction> => async dispatch => {
    const res = await FirebaseService.getAll()
    const result: Array<RegionType> = []
    res.forEach((doc) => {
        result.push(doc.data() as RegionType)
    });
    if (result.length) {
        dispatch(setData(result))
    }
}

export default {
    getDataAsync,
    setDataAsync
}