import React from 'react';
import ListPictures from "./ListPictures";

const Computers = props => props.loaded ?
      <ListPictures listPictures={props.images} loaded={props.loaded}/> :
      <h1 className="loading"> ... LOADING ... </h1>;

export default Computers;
