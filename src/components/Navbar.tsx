import { useAppDispatch, useAppSelector } from "@/features/store";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  console.log(counter);

  const increment = () => {
    dispatch({ type: "counter/increment" });
  };

  const decrement = () => {
    dispatch({ type: "counter/decrement" });
  };
  return (
    <>
      <h1>{counter.count}</h1>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Navbar;
