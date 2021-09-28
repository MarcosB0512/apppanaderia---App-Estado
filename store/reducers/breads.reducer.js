import { FILTER_BREADS, SELECT_BREAD } from '../actions/bread.actions'

import { BREADS } from "../../data/breads";

const initialState = {
    list: BREADS,
    filteredBreads: [],
    selectedID: null,
};

const BreadsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BREAD:
            return {
                ...state,
                selectedID: action.breadID,
            };
        case FILTER_BREADS:
            return {
                ...state,
                filteredBreads: state.list.filter(item => item.category === action.categoryID)
            }
        default:
        return state;
    }

}
export default BreadsReducer;

