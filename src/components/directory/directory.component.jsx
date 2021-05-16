import React, { Component } from "react";
import Menuitem from "../menu-item/menu-item.component";
import { sections } from "../../directory.data";
import "./directory.styles.scss";

export class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, linkUrl, size }) => (
          <Menuitem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          ></Menuitem>
        ))}
      </div>
    );
  }
}

export default Directory;
