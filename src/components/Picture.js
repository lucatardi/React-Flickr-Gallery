import React from "react";

const Picture = props =>
  <li>
    <img src={props.src} alt={props.altText} height="100%"/>
  </li>
export default Picture;
