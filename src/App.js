import React from 'react';
import Greetings from './components/Greetings';

const App = () => (
  <div className="container">
    <h1 className="h1 text-center mb-5 mt-3 text-decoration-underline">Today&apos;s quote!</h1>
    <Greetings />
  </div>
);

export default App;
