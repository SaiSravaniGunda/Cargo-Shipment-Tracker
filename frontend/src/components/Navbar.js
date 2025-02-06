import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🚢 Cargo Tracker
        </Link>

        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-primary fw-bold" to="/new-shipment">
            + New Shipment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
