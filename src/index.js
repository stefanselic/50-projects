/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpandingCards from './ExpandingCards/ExpandingCards';
import ProgressSteps from './ProgressSteps/ProgressSteps';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <ExpandingCards /> */}
    <ProgressSteps />
  </React.StrictMode>,
);
