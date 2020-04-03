import React, { useState } from 'react';

const Example = () => { 
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={ () => setCount(count+ 1)}>Aumentar</button>
    </div>
  );
}

export default Example