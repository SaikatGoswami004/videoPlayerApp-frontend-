import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Login" : "Sign Up"}
      </button>
    </Container>
  );
}
const Container = styled.div`
padding:0 1rem;
.logo{
  img{
    height:5rem;
    margin:0 0 0 -5rem;
  }
}
button{
  padding:0rem 0rem;
  margin:0 0 0 60rem;
  background-color:#e50914;
  border:none;
  cursor:pointer;
  color:white;
  border-redius:0.2rem;
  font-weigth:bolder;
  font-size:1.05rem;
}
`;
