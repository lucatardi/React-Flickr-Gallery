import React from 'react';
import ListPictures from "./ListPictures";

const Cats = props => props.loaded ?
      <ListPictures listPictures={props.images} loaded={props.loaded}/> :
      <h1 className="loading"> ... LOADING ... </h1>;

export default Cats;
