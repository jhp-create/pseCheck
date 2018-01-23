import React from 'react';
import { Sparklines,SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

const PriceChart = props => {
  return (
    <div>
      <Sparklines height={100} width={150} data={props.data} >
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
        <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
      </Sparklines>
    </div>
  );
}

export default PriceChart;