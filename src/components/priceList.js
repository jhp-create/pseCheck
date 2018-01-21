import React from 'react';

const PriceList = props => {
  console.log('inside pricelist', props)
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
        {renderPrice(props.price)}
      </tbody>
    </table>
  );
}

const renderPrice = data => {
  return (
    <tr></tr>
  );
}

export default PriceList;