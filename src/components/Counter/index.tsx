import { useState } from 'react';

export function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>O valor atual do contador é: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}