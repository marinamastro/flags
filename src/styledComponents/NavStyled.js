import styled from "styled-components";

const NavStyled = styled.header`
display:grid;
grid-template-rows:auto auto auto;
grid-template-columns:auto auto;
justify-content:center;
h1{
    grid-row:1
}
form{
    grid-row:2;
    display:flex;
    justify-content:center;
}
input{   
    text-align:center;
    font-family: 'Nunito Sans', sans-serif;
    padding:0.4rem
}
button{
    padding:0.4rem;
    font-family: 'Nunito Sans', sans-serif;
}
select{
    grid-row:2;
    @media (max-width:500px){
        margin-top:1rem;
        grid-row:3;
        padding:0.5rem
    }
}
`
export default NavStyled