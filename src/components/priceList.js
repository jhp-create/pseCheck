import React from 'react';
import PriceChart from './priceChart';
import _ from 'lodash';

const PriceList = props => {
  console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th>Stock Code</th>
          <th>Stock Prices</th>
          <th>Recommended Price</th>
        </tr>
      </thead>
      <tbody>
        {props.price[0] ? props.price.map(renderPrice) : null}
      </tbody>
    </table>
  );
}

const renderPrice = data => {
  const stockData = data.data;
  const prices = stockData.map(data => data.close);
  console.log(stockData)
  const recommended = ((stockData.reduce((acc,cur) => acc + cur.close, 0)/stockData.length)*0.99).toFixed(2);
  return (
    <tr key={stockData[0].symbol+stockData[0].close}>
      <td>{stockData[0].symbol}</td>
      <td><PriceChart data={prices} /></td>
      <td>{recommended}</td>
    </tr>
  );
}

export default PriceList;