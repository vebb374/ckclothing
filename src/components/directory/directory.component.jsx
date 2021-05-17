import React, { Component } from "react";
import Menuitem from "../menu-item/menu-item.component";
import { sections } from "../../directory.data";
import "./directory.styles.scss";

export class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherprops }) => (
          <Menuitem key={id} {...otherprops}></Menuitem>
        ))}
      </div>
    );
  }
}

export default Directory;
