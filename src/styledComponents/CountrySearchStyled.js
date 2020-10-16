import styled from "styled-components";

const CountrySearchStyled = styled.div`
display:flex;
justify-content:center;
margin-top:2rem;
button{
    position:absolute;
    top:87px;
    right:260px;
    padding:0.4rem;
    @media (max-width:952px){
    top:0;    
    right:0px;
    height:40px
}
    
}

`

export default CountrySearchStyled