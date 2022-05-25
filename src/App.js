import React, { useEffect, useState } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import axios from "axios";
function App() {
  const [employees,setEmployees] =useState([]);
  const [editEmployee,seteditEmployee] =useState(false);
  const [empObj,setempObj] =useState(null);
  const fetchEmployee=()=>{
    axios.get("https://6263f8df98095dcbf92971f3.mockapi.io/Employee").then(res=>{
      setEmployees(res.data);
      });
  }
  useEffect(()=>{
    fetchEmployee();
  },[]);
 
  const handleAction=(type,emp)=>{
       if(type==="delete"){
         axios.delete("https://6263f8df98095dcbf92971f3.mockapi.io/Employee/"+emp.id)
         .then(()=>{
          fetchEmployee();
         });
       }
       if(type==="edit"){
         seteditEmployee(true);
         setempObj(emp);
       }
  };
  return (
    <div className="App">
      {editEmployee===true ? <EditEmployee seteditEmployee={seteditEmployee} empObj={empObj} fetchEmployee={fetchEmployee}></EditEmployee> :  <AddEmployee employees={employees} setEmployees={setEmployees}></AddEmployee>}
     
      <EmployeeList employees={employees} handleAction={handleAction}></EmployeeList>
    </div>
  );
}

export default App;
