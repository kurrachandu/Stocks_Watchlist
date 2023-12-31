import React, { useEffect, useState } from 'react';
import './Watchlist.css';

function Watchlist({ stocks }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [stockList, setStockList] = useState(stocks);

  useEffect(()=>{
      setStockList(stocks);
    },[stocks]);
    
  const handleDragStart = (e, item, index) => {
    setDraggedItem({ item, index });
  };

  const handleDragOver = (e, targetIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    if (draggedItem === null) return;

    const updatedList = [...stockList];
    const { item, index } = draggedItem;

    // Swap the dragged item with the target item
    const temp = updatedList[targetIndex];
    updatedList[targetIndex] = item;
    updatedList[index] = temp;

    setStockList(updatedList);
    setDraggedItem(null);
  };

  return (
      <div className="full-container">
        <div className="left-container">
          
          <div className="watchlist">
            <h2>Stocks Watchlist</h2>
            <div className="watchlist-items">
              <ul>
                {stockList.map((stock, index) => (
                  <li
                    key={stock.companyName}
                    draggable
                    onDragStart={(e) => handleDragStart(e, stock, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    <div className='stock-info'>
                    <span className='stock-Name'>{stock.companyName}</span> 
                    <span className='stock-type'>{stock.stockType}</span>
                    </div>
                    <div className='stock-value'>
                      <span>{stock.stockValue}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="right-container">
          
        </div>
      </div>
  );
}

export default Watchlist;
