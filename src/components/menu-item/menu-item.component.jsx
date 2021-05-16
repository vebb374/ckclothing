import React from "react";
import "./menu-item.styles.scss";

function Menuitem({ title, imageUrl, size, linkUrl }) {
  return (
    <div className={`${size} menu-item`}>
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

export default Menuitem;
