import {
 applyMiddleware,
 combineReducers,
 createStore
} from "redux";

import BreadsReducer from "./reducers/breads.reducer";
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from "./reducers/category.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));