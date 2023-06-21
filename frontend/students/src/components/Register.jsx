import React, { createContext, useContext, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

 

  const navigate = useNavigate("");
  

  const [inpval, setINP] = useState(
    {
      name: '',
      email: '',
      address: '',
      City: '',
      class: '',
      section: ''

    }
  )

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const addinpdata= async(e)=>{
    e.preventDefault();
    
    const { name,email,address,city,Class,section }=inpval;
    const token = localStorage.getItem('jwtToken');
    const res = await fetch("http://localhost:8003/crudapp/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        email,
        address,
        city,
        Class,
        section,
      }),
    });
  
  const data= await res.json();
  console.log(res);
   
  if(res.status===422 || !data){
    alert("error");
    console.log("error");
  }else{
    console.log("data added");
    toast("added!", { type: "success", position: "top-center", theme: "dark" });
    navigate("/crudapp");
  }

  }

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-5">
        <div className="row">
          <div className="mb-2  col-lg-g col-md-6 col-12 ">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              name="name"
              value={inpval.name}
              onChange={setdata}
              type="text"
              className="form-control"
              id="Name"
            />
          </div>
          <div className="mb-2  col-lg-g col-md-6 col-12  ">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              value={inpval.email}
              onChange={setdata}
              type="email"
              className="form-control"
              id="Email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-2   col-lg-g col-md-6 col-12 ">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              name="address"
              value={inpval.address}
              onChange={setdata}
              type="text"
              className="form-control"
              id="Address"
            />
          </div>
          <div className="mb-2   col-lg-g col-md-6 col-12 ">
            <label for="exampleInputPassword1" className="form-label">
              City
            </label>
            <select
              name="city"
              value={inpval.city}
              onChange={setdata}
              id="city"
              className="form-control"
            >
              <option value="">--Please choose a city--</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Noida">Noida</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Pune">Pune</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>
          <div className="mb-2   col-lg-g col-md-6 col-12 ">
            <label for="exampleInputPassword1" className="form-label">
              Class
            </label>
            <select
              name="Class"
              value={inpval.Class}
              onChange={setdata}
              id="Class"
              className="form-control"
            >
              <option value="">--Please choose a class--</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>
          <div className="mb-2   col-lg-g col-md-6 col-12 ">
            <label for="exampleInputPassword1" className="form-label">
              Section
            </label>
            <select
              name="section"
              value={inpval.section}
              onChange={setdata}
              id="section"
              className="form-control"
            >
              <option value="">--Please choose a section--</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div>
          <button type="submit" onClick={addinpdata} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
