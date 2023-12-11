import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faOpencart} />
      <span>{props.count}</span>
    </div>
  );
};

export default Navbar;
