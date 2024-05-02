import React, { useContext } from 'react';
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
      <div>
        <SortButtons handleSortData={handleSortData} />
      </div>
      <div className="custom-container">
        {data.map((items) => {
          return (
            <Item
              key={items.make}
              make={items.make}
              description={items.description}
              year={items.year}
              color={items.color}
              price={items.price}
              img={items.img}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
