import React from 'react';
import PropTypes from 'prop-types';
import './CircleBar.css';

const CircleBar = ({ percentage }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-bar">
      <svg className="circle-bar-svg">
        <circle className="circle-bar-track" cx="30" cy="30" r={radius}></circle>
        <circle
          className="circle-bar-progress"
          cx="30"
          cy="30"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        ></circle>
      </svg>
      <div className="circle-bar-label">
        {/* <p>{percentage}%</p> */}
      </div>
    </div>
  );
};

CircleBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircleBar;
