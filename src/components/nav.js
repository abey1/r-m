import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <Button
            onClick={() => navigate("/")}
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="false"
          >
            Characters
          </Button>
        </li>
        <li className="nav-item" role="presentation">
          <Button
            onClick={() => navigate("/episodes")}
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Episodes
          </Button>
        </li>
        <li className="nav-item" role="presentation">
          <Button
            onClick={() => navigate("/locations")}
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="true"
          >
            Locations
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
