import React from "react";
import Picture from "./Picture.js";
import NotFound from "./NotFound.js";

const ListPictures = (props) => {
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {props.listPictures.map((item,index) => {
          let id = item.id;
          let alt = item.title;
          let url = `https://farm${item.farm}.staticflickr.com/${item.server}/${id}_${item.secret}.jpg`;
          return <Picture key={id} altText={alt} src={url}/>; // Don't forget to pass key
        })}
        {(props.listPictures.length < 1 && props.loaded) ? <NotFound /> : null}
      </ul>
    </div>
  );
};

export default ListPictures;
