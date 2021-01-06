import React from 'react';
import CounterContainerHooks from "./container/CounterContainerHooks";
import TodosContainerHooks from "./container/TodosContainerHooks";

const App = () => {
  return (
      <div>
        <CounterContainerHooks />
        <hr />
        <TodosContainerHooks />
      </div>
  );
};

export default App;