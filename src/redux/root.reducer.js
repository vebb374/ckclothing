import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootreducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
});

export default persistReducer(persistConfig, rootreducer);
