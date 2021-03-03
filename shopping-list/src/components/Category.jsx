import React from "react";
import CategoryItem from './CategoryItem';

export default function Category(props) {
  return (
    <div className="category-item" key={props.ctgName}>
      <figure className="ctg-head">
        <img
          src={`../images/${props.ctgName}`}
          alt=""
          className="img-responsive ctg-img"
        />
        <h2 className="ctg-name">{props.ctgName}</h2>
      </figure>
      <button onClick={() => props.onRemoveCategory(props.ctgName)}>Remove</button>
      <CategoryItem/>
    </div>
  );
}
