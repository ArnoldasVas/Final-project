import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { handleSort } from '../../utils/sortUtils';
import SortButtons from '../SortButtons/SortButtons';
import Item from '../Item/Item';

import './Main.scss';

function Main() {
  const { data, setData } = useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main>
      <div className="buttons">
        <SortButtons handleSortData={handleSortData} />
      </div>
      <div className="custom-container">
        {data.map((item) => {
          return (
            <Item
              key={item.make}
              make={item.make}
              description={item.description}
              year={item.year}
              color={item.color}
              price={item.price}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
