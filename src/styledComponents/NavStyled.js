import styled from "styled-components";

const NavStyled = styled.header`
display:grid;
grid-template-rows:auto auto;
grid-template-columns:auto;
justify-content:center;
h1{
    grid-row:1
}
form{
    display:flex;
    justify-content:center;
}
input{
    grid-row:2;
    text-align:center;
    font-family: 'Nunito Sans', sans-serif;
    padding:0.4rem
}
button{
    padding:0.4rem;
    font-family: 'Nunito Sans', sans-serif;
}
`
export default NavStyled