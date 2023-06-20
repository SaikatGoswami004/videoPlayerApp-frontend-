import React, { useState } from "react";
import BackgroundImage from "../component/BackgroundImage";
import Headers from "../component/Header";
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {firebaseAuth} from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const hamdleChange = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Headers login />
        <div className="body flex a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies,and tv show and more</h1>
            <h4>Watch anywhere,Cancle anytimne</h4>
            {/* <h6>
          Ready to watch ? Enter your Email to crate or restart membership
        </h6> */}

            <div className="form">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {showPassword && (
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              )}

              {!showPassword && (
                <button onClick={() => setShowPassword(true)}>
                  Get Started
                </button>
              )}
            </div>
            <button className="login-signup" onClick={hamdleChange}>
              Singn Up
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 0 20rem;
        }
      }
      .form {
        display: grid;
        grid-template-column: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 50%;
        display: flex;
        justify-content: center;
        align-item: center;
        flex-direction: column;
        height: 2rem;
        margin: 2rem 0 0 20rem;
      }
      input {
        color: black;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        height: 2rem;
        margin: 0 0.1rem 0 0.1rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
      .login-signup {
        padding: 0.5rem 1rem;
        margin: 2rem 0.1rem 0 0;

        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-redius: 0.2rem;
        font-weigth: bolder;
        font-size: 1rem;
      }
    }
    button {
      padding: 0.5rem 1rem;

      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-redius: 0.2rem;
      font-weigth: bolder;
      font-size: 1.05rem;
    }
  }
`;
