import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Practice = () => {
  // Static data points for the chart
  const dataPoints = [
    { x: new Date(2023, 0), y: 65 },
    { x: new Date(2023, 1), y: 59 },
    { x: new Date(2023, 2), y: 80 },
    { x: new Date(2023, 3), y: 81 },
    { x: new Date(2023, 4), y: 56 },
    { x: new Date(2023, 5), y: 55 },
    { x: new Date(2023, 6), y: 40 },
  ];

  const options = {
    theme: "light2",
    title: {
      text: "Monthly Data"
    },
    data: [{
      type: "line",
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "#,##0.00",
      dataPoints: dataPoints
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Practice;
