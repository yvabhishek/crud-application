import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from '@mui/material';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import download from '../download.png'

const Details = () => {
    return (
      <div className="container mt-3">
        <h1 style={{ fontWeight: 400 }}>Welcome Abhishek</h1>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <div className="add_btn">
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
              <button className="btn btn-danger">
                <DeleteIcon />
              </button>
            </div>
            <div className="row">
              <div className="leftview col-lg-6 col-md-6 col-12">
                <img
                  src={download}
                  style={{ width: 90 }}
                  alt="profile picture"
                />
                <h3 className="mt-3">
                  Name:<span> Abhishek Yadav</span>
                </h3>
                <p className="mt-3">
                  <MailOutlineIcon />
                  Email:<span> kjksxy@gmail.com</span>
                </p>
                <p className="mt-3">
                  <HomeIcon /> Address: <span>Pataudi</span>
                </p>
              </div>
              <div className="rightview col-lg-6 col-md-6 col-12">
                <h3 className="mt-5">
                  City:<span> Gurgaon</span>
                </h3>
                <p className="mt-3">
                  Class:<span> XII</span>
                </p>
                <p className="mt-3">
                  Section: <span>A</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default Details;
