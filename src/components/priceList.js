import React from 'react';
import PriceChart from './priceChart';
import _ from 'lodash';

const PriceList = props => {
  console.log(props)
  return (
    <table className='price-list'>
      <thead>
        <tr className='row'>
          <th className='col-1' >Stock Code</th>
          <th className='col-2' >Stock Prices</th>
          <th className='col-3' >Recommended Price</th>
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
    <tr key={stockData[0].symbol+stockData[0].close} className='row'>
      <td className='col-1'>{stockData[0].symbol}</td>
      <td className='col-2'><PriceChart data={prices} /></td>
      <td className='col-3'>Php {recommended}</td>
    </tr>
  );
}

export default PriceList;