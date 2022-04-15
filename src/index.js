import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


let rootReducer = (prevState={name:'OKLABS'},action)=>{
  let newState =prevState;
  switch(action.type){
      case 'A':

        break;
      case 'B':
        newState = {
          ...prevState,
          name:'ABHISHEK'
        }

        break;
      default:

    }

    return newState;
}

let xyz = ({ getState })=>{
  //console.log('action ---->>  Reducer',x);
  return { getState }
}

let storeObject = createStore(rootReducer,{name:'OKLABS'},applyMiddleware(xyz));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObject}>
      <App />
    </Provider>
  </React.StrictMode>
);