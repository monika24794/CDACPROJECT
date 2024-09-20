import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
 

  const [fname, setFirstName] = useState("")
  const [lname, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [pincode, setPincode] = useState("")
  const [mobilenumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Admin")

  const onOptionChange = e => {
    setRole(e.target.value)
  }
  async function SignUp(e) {
    e.preventDefault();
    let item = { fname, lname, city,state,pincode, mobilenumber, email, username, password, role }
   //console.warn(item)

   axios.post("http://localhost:9545/user/add",{
    firstName: fname, 
    lastName: lname,
    phoneNo:mobilenumber,
    email:email,
    city:city,
    state:state,
    pincode:pincode,
    userName:username,
    password:password,
    role:role,
  }).then((res)=>{
    console.log(res.data);
    
  }).catch((err)=>{
    console.log(err);
    
  })
  }
 
  // Handle input change for each field
  
        // Navigate based on the role
        
        
        // Reset form fields
        
  // const RegistrationForm = () => {

  //   const [fname, setFirstName] = useState("")
  //   const [lname, setLastName] = useState("")
  //   const [address, setAddress] = useState("")
  //   const [mobilenumber, setPhoneNumber] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [username, setUserName] = useState("")
  //   const [password, setPassword] = useState("")
  //   const [role, setRole] = useState("Medium")
  
  //   const onOptionChange = e => {
  //     setRole(e.target.value)
  //   }
  
  
    // async function Registration(e) {
    //   e.preventDefault();
    //   let item = { fname, lname, address, mobilenumber, email, username, password, role }
    //  console.warn(item)
  
      // let result = await fetch("http://localhost:7350/user/add", {
      //   method: "POST",
      //   body: JSON.stringify(item),
      //   headers: {
      //     "content-type": "application/json",
      //     "Accept": "application/json"
      //   }
      // })
  
      // axios.post("http://localhost:7350/user/add",{
      //   firstName: fname, 
      //   lastName: lname,
      //   phoneNo:mobilenumber,
      //   email:email,
      //   address:address,
      //   userName:username,
      //   password:password,
      //   role:role,
      // }).then((res)=>{
      //   console.log(res.data);
        
      // }).catch((err)=>{
      //   console.log(err);
        
      // })

  return (
    <div className="main">
      <div className="register">
        <h2>Register Here</h2>
        <form id="register" onSubmit={SignUp}>
          <label>First Name:</label>
          <br />
          <input type="text" name="fname" id="fname" value={fname} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
          <br /><br />
          <label>Last Name:</label>
          <br />
          <input type="text" name="lname" id="lname" value={lname} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
          <br /><br />
          <label>city:</label>
          <br />
          <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter Address" />
          <br /><br />
          <label>State:</label>
          <br />
          <input type="text" name="state" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter Address" />
          <br /><br />
          <label>Pincode:</label>
          <br />
          <input type="text" name="pincode" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter Address" />
          <br /><br />
          <label>Phone Number:</label>
          <br />
          <input type="tel" id="mobilenumber" name="mobilenumber" pattern="[0-9]{10}" value={mobilenumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="1234567890" required />
          <br /><br />
          <label>Email:</label>
          <br />
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          <br /><br />
          <label>UserName:</label>
          <br />
          <input type="text" name="username" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter UserName" />
          <br /><br />
          <label>Password:</label>
          <br />
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          <br /><br />
          <input
        type="radio"
        name="role"
        value="Customer"
        id="customer"
        checked={role === "Customer"}
        onChange={onOptionChange}
      />
      <label htmlFor="regular">Customer</label>

      <input
        type="radio"
        name="role"
        value="Agent"
        id="agent"
        checked={role === "Agent"}
        onChange={onOptionChange}
      />
      <label htmlFor="medium">Agent</label>

      <input
        type="radio"
        name="role"
        value="Admin"
        id="admin"
        checked={role === "Admin"}
        onChange={onOptionChange}
      />
      <label htmlFor="large">Admin</label>

          <button  type="submit" value="Submit" name="submit" id="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};
  

export default Signup;