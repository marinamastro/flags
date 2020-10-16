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
        .catch(error=>console.log(error)); 
        dispatch({type:"MOSTRAR_TODOS",payload:false});             
    }
        else{
            alert("Ingrese un nombre")
        }
    }
      
    function handleChange(e){  
        if(e.target.value==="all"){
            fetch("https://restcountries.eu/rest/v2/all")
            .then(response=>response.json())
            .then(data=>dispatch({
                type:"SET_COUNTRIES_BY_REGION", 
                payload:data
            }))
            .catch(error=>console.log(error)); 
        }else{ 
        fetch("https://restcountries.eu/rest/v2/region/"+e.target.value)
        .then(response=>response.json())
        .then(data=>dispatch({
            type:"SET_COUNTRIES_BY_REGION", 
            payload:data
        }))
        .catch(error=>console.log(error)); 
        dispatch({type:"MOSTRAR_TODOS",payload:false});       
     } 
     dispatch({type:"VACIAR_COUNTRIES_BY_NAME"})
    }

    return <NavStyled>
         <h1>250 World Country Flags</h1>
         <form onSubmit={(e)=>handleSubmit(e)}>
         <input type = "text" placeholder="Country Name" onChange={filterCountryByName}/> 
         <button>Search</button>        
         </form>  
         <select onChange={(e)=>handleChange(e)}>
            <option disabled selected>Select Region</option>  
            <option value="asia">Asia</option>   
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="africa">Africa</option>
            <option value="polar">Polar</option>
            <option value="americas">Americas</option>
            <option value="all">All</option>
        </select>      
        </NavStyled>       
}

export default Header