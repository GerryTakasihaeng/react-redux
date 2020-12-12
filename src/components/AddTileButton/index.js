import React from "react";
import { func, string } from "prop-types";
import "./style.css";

export default function AddTileButton({ onClick, color }) {
  const buttonStyles = {
    backgroundColor: color
  };
  return <div className="button" style={buttonStyles} onClick={onClick} />;
}

AddTileButton.propTypes = {
  onClick: func.isRequired,
  color: string.isRequired
};
