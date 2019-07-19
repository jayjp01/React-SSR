import Countries from "../components/Countries";
import Country from "../components/Country";
import Newes from "../pages/newes";


export default [
  {
    component: Countries,
    path: '/',
    exact: true
  },
  {
    component: Newes,
    path: '/newes',
    exact: true
  },
  {
    component: Country,
    path: '/:name'
  }
];