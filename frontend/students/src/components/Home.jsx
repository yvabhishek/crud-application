import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const Home = () => {
    return (
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <button className="btn btn-primary">Add Data</button>
          </div>
          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Class</th>
                <th scope="col">Section</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Abhishek</td>
                <td>kjksxy@gmail.com</td>
                <td>Pataudi</td>
                <td>Gurgaon</td>
                <td>XII</td>
                <td>A</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">
                    <RemoveRedEyeIcon />
                  </button>
                  <button className="btn btn-primary">
                    <EditIcon />
                  </button>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sahil </td>
                <td>malhansahil@gmail.com</td>
                <td>jhajjar</td>
                <td>jhajjar</td>
                <td>XII</td>
                <td>B</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">
                    <RemoveRedEyeIcon/></button>
                  <button className="btn btn-primary">
                    <EditIcon />
                  </button>
                  <button className="btn btn-danger">
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Home;
