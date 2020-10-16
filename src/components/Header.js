import React,{useState} from "react";
import {useDispatch} from "react-redux";
import NavStyled from "../styledComponents/NavStyled"

function Header (){
    const dispatch = useDispatch();
    const [filterText,setFilterText] = useState("");

    function filterCountryByName (e){    
       setFilterText(e.target.value)      
    }

    function handleSubmit (e){      
        e.preventDefault();
        if(filterText){
        fetch("https://restcountries.eu/rest/v2/name/"+filterText)
        .then(response=>response.json())
        .then(data=>dispatch({
            type:"SET_COUNTRIES_BY_NAME", 
            payload:data
        }))
        .catch(error=>dispatch({type:"SET_COUNTRIES_BY_NAME",payload:null})); 
        dispatch({type:"MOSTRAR_TODOS",payload:false});             
    }
        else{
            alert("Ingrese un nombre")
        }
    }
      
    return (<NavStyled>
         <h1>250 World Country Flags</h1>
         <form onSubmit={(e)=>handleSubmit(e)}>
         <input type = "text" placeholder="Country Name" onChange={filterCountryByName}/> 
         <button>Search</button>        
         </form>        
        </NavStyled>   )    
}

export default Header