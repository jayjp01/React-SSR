import { combineReducers } from 'redux';
import Countries from "./countries";
import Country from "./Country";
import Newes from "./newes";

export default combineReducers({
  countries: Countries,
  country: Country,
  newes: Newes
});