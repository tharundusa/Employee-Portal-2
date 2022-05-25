import React, { useState } from "react";
import "./Employee.css";
import axios from "axios";
const AddEmployee=({employees, setEmployees})=>{
    const [name,setName] =useState("");
    const [email,setEmail]=useState("");
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
          const employeeObj={
              name:  name,
              email: email,
          };
          axios.post("https://6263f8df98095dcbf92971f3.mockapi.io/Employee",employeeObj);
          setEmployees([...employees,employeeObj]);
          setName("")
          setEmail("")
          setnameError("")
          setemailError("")
          setvalidEmail("")
    }
return(
    <div className="myForm">
        <h1 className="add-employee">Add Employee</h1>
        <div className="input-field">
            <label>Employee Name:</label>
            <input type="text" value={name} onChange={(event)=>{
                setName(event.target.value)
            }} placeholder="Enter Name"></input>
        </div>
        {nameError.length>0 && <p className="errors">{nameError}</p>}
        <div className="input-field">
            <label>Employee Email:</label>
            <input type="email" value={email} pattern=".+@globex\.com" onChange={(event)=>{
                setEmail(event.target.value)
            }} placeholder="Enter Email" required title="Please provide correct email address"></input>
        </div>
        {emailError.length>0 && <p className="errors">{emailError}</p>}
        {validEmail.length>0 && <p className="errors">{validEmail}</p>}
        <button onClick={handleClick} className="add-btn">Add</button>
    </div>
)
};

export default AddEmployee;