import React, { useState, useEffect } from 'react';

function App() {
  const swapi = require('swapi-node');

  swapi.people({ id: 1 }).then((result) => {
      return <div>{result}</div>;
  });
}

export default App;