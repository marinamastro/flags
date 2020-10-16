import React from "react";
import {Link} from "react-router-dom"
import CountryStyled from "../styledComponents/CountryStyled"


function Country ({flag,name,population,region,capital,languages}) {
    return <CountryStyled>   
        <Link to={`/country/${name}`}>        
            <img src={flag} alt={`flag of ${name}`} loading="lazy"/>      
            <div className="description">
                <h2>{name}</h2>
                <p><strong>Population: </strong>{population}</p>
                <p><strong>Region: </strong>{region}</p>
                <p><strong>Capital: </strong>{capital}</p>
                <p><strong>Languages:</strong> {languages.map((x,i)=>{
                    return <span key={x.name+i}> {x.name}. </span>
                })} </p>
            </div>  
        </Link>        
    </CountryStyled>
}

export default Country