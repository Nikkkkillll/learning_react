import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixRegisterCompenent from './Components/NetflixRegisterComponent';
import NetflixIndexComponent from './Components/NetflixIndexComponent';
import DataBindingComponent from './Components/DataBinding/DataBindingComponent';
import DataBindingTableComponent from './Components/DataBinding/DataBindingTableComponent';
import DataBindingNestedIteration from './Components/DataBinding/DataBindingNestedIteration';
import OneWayDataBinding from './Components/DataBinding/OneWayDataBinding';
import UseStateHook1 from './Components/DataBinding/UseStateHook1';
import OneWayDataBindingApi from './Components/DataBinding/OneWayDataBindingApi';
import OneWayBindingApi2 from './Components/DataBinding/OneWayBindingApi2';
import ShoppingComponent from './Components/DataBinding/ShoppingComponent';
import EventNindingComponent from './Components/DataBinding/EventBindingComponent';
import TwoWayBinding from './Components/DataBinding/TwoWayBinding';
import TwoWayClassDemo from './Components/DataBinding/DataBindingClassComponent/TwoWayClassDemo';
import ShoppingClassComponent from './Components/DataBinding/DataBindingClassComponent/ShoppingClassComponent';
import LoginComponent from './Components/Dynamic Style Changing/LoginComponent';
import FormComponent from './Components/Form Validation/FormComponent';
import FormikDemo from './Components/Form Validation/FomikDemo';
import FormikValidation from './Components/Form Validation/FormikValidation';
import YupValidation from './Components/Form Validation/YupValidation';
import FormikComponentValidation from './Components/Form Validation/FormikComponentValidation';
import LifeCycleClassComponent from './Components/Component Life cycle Hooks/LifeCycleClassDemo';
import UseStateEffect from './Components/Hooks/UseStateEffect';
import UseContextComponent from './Components/Hooks/UseContextComponent';
import UseCookie from './Components/Hooks/UseCookie';
import { CookiesProvider } from 'react-cookie';
import ReducerDemo from './Components/Hooks/ReducerDemo';
import CustomHookDemo from './Components/Custom Hook/CustomHookDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <UseCookie />
    </CookiesProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
