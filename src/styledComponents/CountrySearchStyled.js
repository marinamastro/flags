import styled from "styled-components";

const CountrySearchStyled = styled.div`
display:flex;
width:30%;
margin:2rem;

@media (max-width:850px){
    width:100%;
    margin-left:0;
}
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