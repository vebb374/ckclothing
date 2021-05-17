import React from "react";
import "./homepage.styles.scss";
import Directory from "../components/directory/directory.component";

function Homepage(props) {
  console.log(props);
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  );
}

export default Homepage;
