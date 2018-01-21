import React from 'react';
import PriceChart from './priceChart';

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
  console.log(data)
  return (
    <tr key={stockData[0].symbol+stockData[0].close}>
      <td>{stockData[0].symbol}</td>
      <td><PriceChart data={prices} color='green'/></td>
    </tr>
  );
}

export default PriceList;