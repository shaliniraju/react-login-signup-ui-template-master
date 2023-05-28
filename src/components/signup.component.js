import React, { Component, useState } from 'react';

export default function SignUp()  {


  /*constructor(props){
    super (props)
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }*/
  const [fname , setFname] = useState("");
  const [lname , setLname] = useState("");

  const [email , setEmail] = useState("");
 
  const [password ,setPassword] = useState("");

  const [userType , setUserType] = useState("");
  const [secretkey , setsecretkey] = useState("");


   const handleSubmit = (e) =>{
    if(userType=="Admin" && secretkey!="Inventory"){
      e.preventDefault();
      alert("Invalid admin");
    }
    else{
      e.preventDefault();
  //const {fname,lname,email,password}=this.state;
  console.log(fname,lname,email,password);
  fetch("http://localhost:5000/register",{
    method : "POST",
    crossDomain: true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
    fname,
    lname,
    email,
    password,
    userType,
  }),
})
.then((res)=>res.json())
.then((data)=>{
  console.log(data, "userRegister");
  if(data.status =="ok"){
    alert("Registration successful");
  }
  else{
    alert("something went wrong..enter all the fields");
  }
});
    }
    /*e.preventDefault();
 // const {fname,lname,email,password}=this.state;
  console.log(fname,lname,email,password);
  fetch("http://localhost:5000/register",{
    method : "POST",
    crossDomain: true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
    fname,
    lname,
    email,
    password,
  }),
})
.then((res)=>res.json())
.then((data)=>{
  console.log(data, "userRegister");
});*/
};

  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div>
          Register As {" "}
          <input 
          type= "radio"
          name ="UserType"
          value = "User"
          onChange={(e)=>setUserType(e.target.value)}
             />{" "}
            User {" "}
          <input
          type = "radio"
          name = "UserType"
          value = "Admin"
          onChange={(e) => setUserType(e.target.value)}

          />{" "}
          Admin {""}
          
        </div>

        
          {userType==="Admin"?(
          <div className='mb-3'>
          <label>Secret Key</label>
          <input 
          type ="password"
          className='form-control'
          placeholder = "Secret Key"
          onChange={(e) => setsecretkey(e.target.value)}
          
          />
        </div>
          ): null}

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
            
            />
          

        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            

          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  
}
