import React,{useEffect} from "react";
import Country from "./Country";
import {useSelector,useDispatch} from "react-redux"
import CountriesStyled from "../styledComponents/CountriesStyled"
import CountrySearchStyled from "../styledComponents/CountrySearchStyled"


function Countries (){
    const dispatch = useDispatch();
    const countriesData = useSelector(state=>state.countries)
     //recibo el estado
    const countriesByName=useSelector(state=>state.countriesByName)  
    const volver=useSelector(state=>state.mostrarTodos)  
    const countriesByRegion=useSelector(state=>state.countriesByRegion)
    console.log(countriesByRegion)
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response=>response.json())
        .then(data=>dispatch({
            type:"SET_COUNTRIES", //mando los datos al estado
            payload:data
        }))
        .catch(error=>console.log(error))
    },[dispatch])    

    if(countriesByName&&countriesByName.hasOwnProperty("status")&&!volver){
        return(
            <>
            <h1 style={{margin:"2rem",textAlign:"center"}}>Sin resultados</h1>
            <button 
            style={{margin:"auto",textAlign:"center",display:"block",padding:"0.4rem"}}
            onClick={()=>dispatch({type:"MOSTRAR_TODOS",payload:true})}>Volver</button>
            </>
        )
    }else if(Array.isArray(countriesByName)&&countriesByName.length!==0&&!volver){
        return(
            <CountrySearchStyled>           
            { countriesByName.map(x=>{
                return (                
                   <Country flag={x.flag} key={x.numericCode} name={x.name} population={x.population}
                   region={x.region} capital={x.capital} languages={x.languages}/>      
                )
          })}                        
          <button onClick={()=>dispatch({type:"MOSTRAR_TODOS",payload:true})}>Volver</button>    
          </CountrySearchStyled>
        )}
    else if(countriesByRegion.length!==0&&!volver){
      return  <CountriesStyled>    
      { countriesByRegion.map(x=>{
             return (                                
                <Country flag={x.flag} key={x.numericCode} name={x.name} population={x.population}
                region={x.region} capital={x.capital} languages={x.languages}/> 
             )
       })}       
    </CountriesStyled>
    }        
    else{
    return(      
        <CountriesStyled>    
      { countriesData.map(x=>{
             return (                
                <Country flag={x.flag} key={x.numericCode} name={x.name} population={x.population}
                region={x.region} capital={x.capital} languages={x.languages}/>      
             )
       })}
    </CountriesStyled>)}
}

export default Countries