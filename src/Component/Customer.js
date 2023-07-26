

import React, { useEffect, useState } from 'react'
//import { ReactDOM } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTask ()  {

   const[Users,setUsers]=useState([]);
  const  Navigate=useNavigate();
  const [title,settitle]=useState('');
  const [description,setDescription]=useState('');
  const [status,setstatus]=useState('');
  const [due_date,setdue_date]=useState('');
  const [assigned_user,setassigned_user]=useState('');
 
 
     
  
const  handletitle=(e)=>{
    settitle(e.target.value)
  }
   const handleDescription=(e)=>{
    setDescription(e.target.value)
  }
 const handlestatus=(e)=>{
    setstatus(e.target.value)
  }
  const handleDue_date=(e)=>{
    setdue_date(e.target.value)
  }
  const handleassigned_user=(e)=>{
    setassigned_user(e.target.value)
  }



var i=0;
const  handleAdd=()=>{
    
    const Data={Id:i+1,Name:title ,Address:description, Feedback:status }
    
    Axios({
      method: "POST",
      
      url: "http://localhost:5000/customer", 
      data:Data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>{console.log("users task sent:",res.data.Users);setUsers(res.data.users) ;});
   alert("Data is saved")

 
  }

  return (
  
<>      
  
<div className='container fluid mt-5'>
<form  className='shadow-lg p-3 mb-5 bg-white rounded'>
<h1 className="h3  mb-3 fw-normal p-3">Customer  Form</h1>
<div class="col-sm-10">
<label  class="col-sm-2 col-form-label ">Customer Name</label>
      <input type="text"  class="form-control"  onChange={(e)=>{handletitle(e)}} />

 </div>
 <div class="col-sm-10">
 <label  class="col-sm-2 col-form-label">Customer Address</label>
 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{handleDescription(e)}} ></textarea>
      
    </div>
    <div class="col-sm-10">
<label  class="col-sm-2 col-form-label ">Customer Feedback</label>
      <input type="text"  class="form-control"  onChange={(e)=>{handlestatus(e)}} />

 </div>
 <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Save</div>
 <div className="btn btn-primary m-2" onClick={()=>{Navigate('./Prieview');}}>Prieview</div>
  </form>

    </div>
   </> 
  )
}