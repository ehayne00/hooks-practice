import React, { useEffect } from "react";
import useCounter from "../hooks/useCounter";

const TimeOnPage = () => {
  const { count, up } = useCounter();

  useEffect(() => {
    setInterval(() => {
      up();
    }, 1000);
  }, []);

  //empty dependency array is required

  return <h2>You have been on this page for {count} seconds.</h2>;
};

export default TimeOnPage;
