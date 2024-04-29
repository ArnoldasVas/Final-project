import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import './item.scss';

function Item({ make, year, color, price, description }) {
  return (
    <div className="item">
      <h2>{make}</h2>
      <p>{year}</p>
      <p>{color}</p>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Item;
