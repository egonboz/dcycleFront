import React, { useEffect, useRef } from "react";
import "../css/PieChart.css";

export const PieChart = ({ data, images, texts }) => {
  const pieChartRef = useRef(null);

  useEffect(() => {
    if (pieChartRef.current) {
      requestAnimationFrame(() => {
        const slices = pieChartRef.current.querySelectorAll(".slice .inner");
        slices.forEach((slice) => {
          slice.style.transform = slice.dataset.targetTransform;
        });
      });
    }
  }, [data]);

  let cumulativePercentage = 0;

  return (
    <div className="pie-chart-container">
      <div className="pie-chart" ref={pieChartRef}>
        {data.map((percentage, index) => {
          const startAngle = (cumulativePercentage * 360) / 100;
          const endAngle = ((cumulativePercentage + percentage) * 360) / 100;
          cumulativePercentage += percentage;

          return (
            <div
              key={index}
              className="slice"
              style={{ transform: `rotate(${startAngle}deg)` }}
            >
              <div
                className="inner"
                data-target-transform={`rotate(${endAngle - startAngle}deg)`}
                style={{
                  transform: `rotate(0deg)`,
                  backgroundColor: getColor(index),
                }}
              ></div>
            </div>
          );
        })}
        <div className="center-hole"></div>
      </div>
      <div className="legend">
        {data.map((percentage, index) => (
          <div key={index} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: getColor(index) }}
            ></div>
            <div className="legend-text">
              <p>{percentage.toFixed(2)}%</p>
              <img src={images[index]} alt={`legend-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getColor = (index) => {
  const colors = [
    "#7AD2DC",
    "#2F45F5",
    "#4E9C9F",
    "#1E3A8A",
    "#6ABEDC",
    "#003C8C",
    "#A0D3E8",
    "#1D4ED8",
  ];
  return colors[index % colors.length];
};
