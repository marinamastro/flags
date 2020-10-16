import React from 'react';
import './App.css';
import Countries from "./components/Countries";
import Header from "./components/Header";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {Route} from "react-router-dom";
import CountryDetail from "./components/CountryDetail"

const initialState= {
  countries:[],
  countriesByName:[],
  countriesByRegion:[],
  mostrarTodos:false,
  country:[]
}

function reducer (state,action){
  switch(action.type){
    case "SET_COUNTRIES":{
      return {...state,countries:action.payload}};
      //recibo los datos del dispatch y los guardo en initialState
    case "SET_COUNTRIES_BY_NAME":{        
      return {...state,countriesByName:action.payload}
    }
    case "MOSTRAR_TODOS":{        
      return {...state,mostrarTodos:action.payload}
    }
    case "SET_COUNTRY":{        
      return {...state,country:action.payload}
    }
      default : {return state}
  }   
}
const store = createStore(reducer,initialState)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Route exact path="/" component={Header}/>
      <Route exact path="/" component={Countries}/>   
     <Route exact path="/country/:name" render={(match)=><CountryDetail match={match}/>}/>
    </div>
    </Provider>
  );
}

export default App;
