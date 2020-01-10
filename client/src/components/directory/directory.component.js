import React, { Component } from "react";

import { connect } from "react-redux";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item-component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default connect()(Directory);
