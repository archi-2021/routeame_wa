import { useState } from 'react';

function App() {

  const [counter, setCounter ] = useState("COUNTER");


  return (
    <div className="red">
      <p>{counter}</p>
    
    
    </div>
  );
}

export default App;
