import axios from "axios";
import React from "react";
import { useState } from "react";
const EditEmployee=({empObj,fetchEmployee,seteditEmployee})=>{
    const [name,setName] =useState(empObj.name);
    const [email,setEmail]=useState(empObj.email);
    const [nameError,setnameError]=useState("");
    const [emailError,setemailError]=useState("");
    const [validEmail,setvalidEmail]=useState("");

    const handleClick=()=>{
        if(name.length===0){
            return setnameError("Enter valid name")
        }
        if(email.length===0){
            return setemailError("Enter valid email")
        }
        if(!email.includes("@gmail.com")){
            return setvalidEmail("Enter valid email address")
         }
        axios.put("https://6263f8df98095dcbf92971f3.mockapi.io/Employee/"+empObj.id,
          {
              name:name,
              email:email,
          }
       )
       .then(()=>{fetchEmployee()})
       seteditEmployee(false);
       
    }
   return(
    <div className="myForm">
    <h1 className="add-employee">Edit Employee</h1>
    <div className="input-field">
        <label>Employee Name:</label>
        <input type="text" value={name} onChange={(event)=>{
            setName(event.target.value)
        }} placeholder="Enter Name"></input>
    </div>
    {nameError.length>0 && <p className="errors">{nameError}</p>}
    <div className="input-field">
        <label>Employee Email:</label>
        <input type="email" pattern=".+@globex\.com"  value={email} onChange={(event)=>{
            setEmail(event.target.value)
        }} placeholder="Enter Email"></input>
    </div>
    {emailError.length>0 && <p className="errors">{emailError}</p>}
    {validEmail.length>0 && <p className="errors">{validEmail}</p>}
    <button onClick={handleClick} className="add-btn">Edit</button>
</div>
   );
}

export default EditEmployee;