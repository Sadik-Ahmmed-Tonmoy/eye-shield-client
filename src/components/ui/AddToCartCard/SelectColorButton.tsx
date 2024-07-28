'use client';
import { useAppDispatch } from "@/lib/hooks";
import { showColor } from "@/redux/features/showColorSlice/ShowColorSlice";
import styles from './AddToCartCard.module.scss'

const SelectColorButton = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(showColor(id))} className="flex justify-center items-center gap-3 my-3 hover:cursor-pointer">
      <p className="text-sm select-color-text">Select Color</p>
      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
  );
};

export default SelectColorButton;
