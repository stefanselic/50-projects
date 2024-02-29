/** @format */

import React, { useState } from 'react';
import './ProgressSteps.css';

export default function ProgressSteps() {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle the next step
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle the previous step
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container">
      {/* Container for progress steps */}
      <div className="progress-container">
        {/* Progress bar */}
        <div
          className="progress"
          style={{ width: `${(currentStep - 1) * 33.33}%` }}></div>
        {/* Circles representing steps */}
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`circle ${step <= currentStep ? 'active' : ''}`}>
            {step}
          </div>
        ))}
      </div>
      <div>
        {/* Button to navigate to the previous step */}
        <button
          className="btn"
          onClick={handlePrev}
          disabled={currentStep === 1}>
          Prev
        </button>
        {/* Button to navigate to the next step */}
        <button
          className="btn"
          onClick={handleNext}
          disabled={currentStep === 4}>
          Next
        </button>
      </div>
    </div>
  );
}
