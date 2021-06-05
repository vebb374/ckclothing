import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import ShopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
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
  directory: directoryReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfig, rootreducer);
