import styled from "styled-components";

const CountriesStyled = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
column-gap: 2rem;
row-gap: 2rem;
margin:5% 8%;
@media (max-width:600px){    
      grid-template-columns: auto;   
      margin:2% 5%;      
  }`

export default CountriesStyled