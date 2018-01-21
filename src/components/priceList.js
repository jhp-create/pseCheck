import React from 'react';

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
        {props.price[0] ? props.price[0].data.map(data => renderPrice(data)) : null}
      </tbody>
    </table>
  );
}

const renderPrice = data => {
  console.log(data)
  return (
    <tr key={data.date+data.close}>
      <td>{data.symbol}</td>
    </tr>
  );
}

export default PriceList;