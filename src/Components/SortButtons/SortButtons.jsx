import React from 'react';
import './SortButtons.scss';

function SortButtons({ handleSortData }) {
  return (
    <div className="buttons">
      <button
        className="btn"
        onClick={() => {
          handleSortData('az');
        }}
      >
        Sort A-Z
      </button>
      <button className="btn" onClick={handleSortData}>
        {' '}
        Sort Z-A
      </button>
      <button
        className="btn"
        onClick={() => {
          handleSortData('highToLow');
        }}
      >
        Sort by price: High to low
      </button>

      <button
        className="btn"
        onClick={() => {
          handleSortData('lowToHigh');
        }}
      >
        Sort by price: Low to high
      </button>
    </div>
  );
}

export default SortButtons;
