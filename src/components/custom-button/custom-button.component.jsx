import React from "react";
import "./custom-button.styles.scss";
function Custombutton({ children, type }) {
  return (
    <button type={type} className="custom-button">
      {children}
    </button>
  );
}

export default Custombutton;
