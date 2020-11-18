//=Import
import React from "react";

//=styles
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn,inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
