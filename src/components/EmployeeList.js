import React from "react";
import "./list.css";
const EmployeeList=({employees,handleAction})=>{
  return (
      <div className="list-container">
         <h1 className="list-heading">EmployeeList</h1>
         {employees.map((emp) =>(
            <div className="employee">
             <p>{emp.name}</p>
             <button onClick={()=>handleAction("edit",emp)} className="btn edit-btn">EDIT</button>
             <button onClick={()=>handleAction("delete",emp)} className="btn delete-btn">DELETE</button>
         </div>
         ))}
      </div>
  )
}

export default EmployeeList;