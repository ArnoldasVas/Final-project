import React from 'react';

import './item.scss';

function Item({ make, year, color, price, description, img }) {
  return (
    <div className="item-card">
      <h2>{make}</h2>
      <h4>Year: {year}</h4>
      <img src={img} alt="" />
      <p>Color: {color}</p>
      <h3>Price: {price}$</h3>
      <p>{description}</p>
    </div>
  );
}

export default Item;
