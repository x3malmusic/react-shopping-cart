import { combineReducers } from "redux";
import products from "./product";
import cart from "./cart";

export default combineReducers({ products, cart });
