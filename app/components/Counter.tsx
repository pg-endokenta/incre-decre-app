"use client"

import React, { useState } from "react";

import Button from "./Button";
import { TbPlus, TbMinus } from "react-icons/tb";

type CounterProps = {
  initialValue?: number; // 初期値（オプション）
};

export default function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div className="w-96">
      <div className="flex flex-col space-y-4 bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <p className="text-4xl text-center py-8 dark:text-white">Current Count: {count} </p>
        <div className="flex justify-center gap-x-4 py-8">
          <Button label="Increment" onClick={handleIncrement} icon={<TbPlus className="size-6" />} />
          <Button label="Decrement" onClick={handleDecrement} icon={<TbMinus className="size-6" />} />
        </div>
      </div>
    </div>
  );
};

