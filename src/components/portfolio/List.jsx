import React, { useState } from 'react';

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list">
      {list.map((category, index) => {
        return (
          <button
            className={`portfolio__list-item text-cs ${active === index ? 'active-work' : ''}`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
