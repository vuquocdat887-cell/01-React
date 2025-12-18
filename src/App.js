import { useState } from "react";

const A = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>tăng</button>
      <button onClick={() => setcount(count - 1)}>giảm</button>
    </div>
  );
};

export default A;
