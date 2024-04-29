import React from 'react';
import { mockData } from '../../mockData';
import Item from '../Item/Item';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }
  render() {
    const { data } = this.state;

    const handleSortData = (direction) => {
      const sortedData = data.sort((a, b) => {
        let fa = a.make.toLowerCase(),
          fb = b.make.toLowerCase();

        if (fa < fb) return direction === 'az' ? -1 : 1;
        if (fa > fb) return direction === 'az' ? 1 : -1;

        return 0;
      });

      this.setState({
        data: sortedData,
      });
    };
    return (
      <main>
        <div className="buttons">
          <button
            onClick={() => {
              handleSortData('az');
            }}
          >
            Sort A-Z
          </button>
          <button onClick={handleSortData}>Sort Z-A</button>
        </div>
        <div className="custom-container">
          {data.map((item) => (
            <Item
              key={item.make}
              make={item.make}
              description={item.description}
              year={item.year}
              color={item.color}
              price={item.price}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
