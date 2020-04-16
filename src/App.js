import React from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import AddBanner from "./components/AddBanner";
import TimeOnPage from "./components/TimeOnPage"
import UserList from "./components/UserList"

const App = () => {
  const { count, up, down } = useCounter();

  return (
    <div className="App">
      <div>
        <h2>{count}</h2>
        <button onClick={down}>-</button>
        <button onClick={up}>+</button>
      </div>
      <TimeOnPage />
      <UserList />
      <AddBanner />
    </div>
  );
};

export default App;
