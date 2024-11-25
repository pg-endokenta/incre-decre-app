"use client"

import React, { useState } from "react";

import Button from "./Button";
import AddSVG from "./AddSVG";
import MinusSVG from "./MinusSVG";

type CounterProps = {
  initialValue?: number; // 初期値（オプション）
};

export default function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div className="text-center space-y-4">
      <p className="text-4xl dard:text-white">Current Count: {count} </p>
      <div className="flex justify-center gap-x-4">
        <Button label="Increment" onClick={handleIncrement} icon={<AddSVG />} />
        <Button label="Decrement" onClick={handleDecrement} icon={<MinusSVG />} />
      </div>
    </div>
  );
};

