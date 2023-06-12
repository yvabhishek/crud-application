import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Edit = () => {

    const [inpval, setINP] = useState({
      name: "",
      email: "",
      address: "",
      city: "",
      class: "",
      section: "",
    });
 

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="container">
        <NavLink to="/">Home2</NavLink>
        <form className="mt-5">
          <div className="row">
            <div class="mb-2  col-lg-g col-md-6 col-12 ">
              <label for="exampleInputPassword1" class="form-label">
                Name
              </label>
              <input
                name="name"
                value={inpval.name}
                onChange={setdata}
                type="text"
                class="form-control"
                id="Name"
              />
            </div>
            <div class="mb-2  col-lg-g col-md-6 col-12  ">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                name="email"
                value={inpval.email}
                onChange={setdata}
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-2   col-lg-g col-md-6 col-12 ">
              <label for="exampleInputPassword1" class="form-label">
                Address
              </label>
              <input
                name="address"
                value={inpval.address}
                onChange={setdata}
                type="text"
                class="form-control"
                id="Address"
              />
            </div>
            <div className="mb-2   col-lg-g col-md-6 col-12 ">
              <label for="exampleInputPassword1" className="form-label">
                City
              </label>
              <input
                name="city"
                value={inpval.city}
                onChange={setdata}
                type="text"
                id="city"
                className="form-control"
                list="cityList"
              />
              <datalist id="cityList">
                <option value="Gurgaon"></option>
                <option value="Noida"></option>
                <option value="New Delhi"></option>
                <option value="Pune"></option>
                <option value="Chandigarh"></option>
                <option value="Mumbai"></option>
              </datalist>
            </div>
            <div className="mb-2   col-lg-g col-md-6 col-12 ">
              <label for="exampleInputPassword1" className="form-label">
                Class
              </label>
              <input
                name="class"
                value={inpval.class}
                onChange={setdata}
                type="text"
                id="class"
                className="form-control"
                list="classList"
              />
              <datalist id="classList">
                <option value="VII"></option>
                <option value="VIII"></option>
                <option value="IX"></option>
                <option value="X"></option>
                <option value="XI"></option>
                <option value="XII"></option>
              </datalist>
            </div>
            <div className="mb-2   col-lg-g col-md-6 col-12 ">
              <label for="exampleInputPassword1" className="form-label">
                Section
              </label>
              <input
                name="section"
                value={inpval.section}
                onChange={setdata}
                type="text"
                id="section"
                className="form-control"
                list="sectionList"
              />
              <datalist id="sectionList">
                <option value="A"></option>
                <option value="B"></option>
                <option value="C"></option>
                <option value="D"></option>
              </datalist>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
