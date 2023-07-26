import axios from 'axios'

import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
export var title1,description1,status1,due_date1,assigned_user1;
export default function Users()
{
    var [Users,setUsers]=useState([]);
    
  const Navigate=useNavigate();
  

    useEffect(()=>{
        axios({
          method: "GET",
          url: "http://localhost:5000/customer",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{console.log("Users Task fetched:",res.data);setUsers(res.data);});
        
      },[])
    
     
return(
     
  <>   
  
  
<div className='container fluid mt-5'>
<form  className='shadow-lg p-3 mb-5 bg-white rounded justify-content-center' >
<button type="button" class="btn-close" aria-label="Close" style={{'float':'right','marginRight':'5px'}} onClick={()=>{Navigate('./Customer');}}></button>
<h1 className="h3  mb-3 fw-normal p-3 ">Customer  Form Prieview</h1>
<div class="col-sm-10">
<label  class="col-sm-2 col-form-label ">Customer </label>
      
<label  class="col-sm-2 label ">{Users.Name}</label>
 </div>
 <div class="col-sm-10">
 <label  class="col-sm-2 col-form-label">Address</label>
 

<label  class="col-sm-2 col-form-label ">{Users.Address}</label>    
    </div>
    <div class="col-sm-10">
<label  class="col-sm-2 col-form-label ">Feedback</label>
      

<label  class="col-sm-2 col-form-label ">{Users.Feedback}</label>

 </div>
 <div className="btn btn-primary m-2" >Ok</div>
 
  </form>

    </div>
  


  
 </>
);

}