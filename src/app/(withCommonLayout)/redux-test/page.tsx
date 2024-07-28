"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { hideColor, showColor } from "@/redux/features/showColorSlice/ShowColorSlice";
import { RootState } from "@/redux/store";
import React from "react";
import {Button, Calendar} from "@nextui-org/react";
import {parseDate} from '@internationalized/date';

const ReduxTest = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const isShowColor = useAppSelector((state: RootState) => state.showColor.value);
  const dispatch = useAppDispatch();
  return (
    <>
    
    
    <div>
      redux test
      <div>
        <div className="flex  gap-5">
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
<p className="mt-8">      show showColor</p>
      <div>
        <div className="flex  gap-5">
          <button aria-label="Increment value" onClick={() => dispatch(showColor())}>
            show Color
          </button>
          {isShowColor ? <div className="w-10 h-10 bg-red-500"></div> : null}
          <button aria-label="Decrement value" onClick={() => dispatch(hideColor())}>
            hide Color
          </button>
        </div>
      </div>
    </div>
    
    
    
    <Button color="primary">
      Button
    </Button>
    </>
  );
};

export default ReduxTest;
