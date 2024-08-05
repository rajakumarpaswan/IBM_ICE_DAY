// import React from 'react'
import "./Login.css"
import Floating from "./Floating"

function Login() {
  return (
    <div className="w-full h-full">
        <div className="loginsection font-mono ">
          <div className="">
            <div>
            <img src="/res 1.png" alt="" />
            </div>
            <h1 className="text-center text-[2rem]">Admin Login</h1>
            <div className="">
               <Floating/>
            </div>
               
          </div>
        </div>
    </div>
  )
}

export default Login