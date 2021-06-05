import React from "react";
import Menuitem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { directoryitems } from "../../redux/directory/directory.selector";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherprops }) => (
      <Menuitem key={id} {...otherprops}></Menuitem>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directoryitems,
});

export default connect(mapStateToProps)(Directory);
