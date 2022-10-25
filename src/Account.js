import React from "react";
import "./CSS/account.css";
import { useState } from "react";

// const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const fistForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");
// signInBtn.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// });
// signUpBtn.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });
// fistForm.addEventListener("click", (e) => e.preventDefault());
// secondForm.addEventListener("click", (e) => e.preventDefault());

const Account = () => {
    
    // const signInBtn = document.getElementById("signIn");
    // const signUpBtn = document.getElementById("signUp");
    // const fistForm = document.getElementById("form1");
    // const secondForm = document.getElementById("form2");
    // const container = document.querySelector(".container");
    // signInBtn.addEventListener("click", () => {
    //     container.classList.remove("right-panel-active");
    // });
    // signUpBtn.addEventListener("click", () => {
    //     container.classList.add("right-panel-active");
    // });
    // fistForm.addEventListener("click", (e) => e.preventDefault());
    // secondForm.addEventListener("click", (e) => e.preventDefault());
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function registerUser(){
        const response= await fetch('http://localhost:5000/api/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <div className="Ac">
            <div className="container right-panel-active">
                <div className="container__form container--signup">
                    <form action="#" className="form" id="form1" onSubmit={registerUser}>
                        <h2 className="form__title">Sign Up</h2>
                        <input type="text" placeholder="Username" className="input"  value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" placeholder="Email" className="input"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" className="input"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button className="btn">Sign Up</button>
                    </form>
                </div>

                <div className="container__form container--signin">
                    <form action="#" className="form" id="form2">
                        <h2 className="form__title">Sign In</h2>
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <a href="#" className="link">Forgot your password?</a>
                        <button className="btn">Sign In</button>
                    </form>
                </div>

                <div className="container__overlay">
                    <div className="overlay">
                        <div className="overlay__panel overlay--left">
                            <button className="btn" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay__panel overlay--right">
                            <button className="btn" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
  
}

export default Account
