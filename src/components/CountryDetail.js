import React,{useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom"


function CountryDetail (props){
    const dispatch = useDispatch();
    const name=props.match.match.params.name;
    const country = useSelector(state=>state.country)
    console.log(country)
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/name/"+name)
        .then(response=>response.json())
        .then(data=>dispatch({
            type:"SET_COUNTRY", //mando los datos al estado
            payload:data
        }))
        .catch(error=>console.log(error))
    },[])  

    return(
        <>
        <Link to="/">
            <h1 className="titulo-country-detail">250 World Country Flags</h1>
        </Link>
        <div className="container-country">
            <div className="country-data">
                {country&&country.map(x=>{
                    return( 
                    <>
                        <img src={x.flag} alt={`flag of ${x.name}`} /> 
                        <p><b>Name: </b>{x.name}</p>
                        <p><b>Capital:</b> {x.capital}</p>
                        <p><b>Currencies:</b> {x.currencies.map(x=><li>Code: {x.code}, name:{x.name}, symbol:{x.symbol}</li>)}</p>
                        <p><b>Languajes:</b>{x.languages.map(x=><li>{x.name}</li>)} </p>
                        <p><b>Population:</b> {x.population}</p>
                        <p><b>Region:</b> {x.region}</p>
                        <p><b>SubRegion:</b> {x.subregion}</p>
                        <p><b>Timezones:</b> {x.timezones.map(x=><li>{x}</li>)}</p>                        
                        <p><b>Translations: </b>
                            <li>{`br: ${x.translations.br}`}</li>
                            <li>{`es: ${x.translations.es}`}</li>
                            <li>{`fr: ${x.translations.fr}`}</li>
                            <li>{`it: ${x.translations.it}`}</li>
                        </p>
                    </>
                )})}
            </div>
            <div className="map">
            <iframe width="600" height="450" frameborder="0" style={{border:0}} src={`https://www.google.com/maps/embed/v1/search?q=${name}&key=AIzaSyDxS87tXZm3pDYP3150emmWF68tN4Guk24`} allowfullscreen></iframe>
            </div>
        </div>
        </>
    )
}

export default CountryDetail