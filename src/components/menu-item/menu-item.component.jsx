import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router";

function Menuitem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY</span>
      </div>
    </div>
  );
}

export default withRouter(Menuitem);
