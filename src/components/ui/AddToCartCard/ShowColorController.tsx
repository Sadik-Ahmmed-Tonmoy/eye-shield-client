"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { hideColor } from "@/redux/features/showColorSlice/ShowColorSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose, IoEyeOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const ShowColorController = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const fakeColorCount = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
    "bg-orange-500",
  ];
  const isShowColor = useAppSelector((state: RootState) => state.showColor.items[id]);
  const dispatch = useAppDispatch();
  const [isSideOptionsVisible, setIsSideOptionsVisible] = useState(false);
  return (
    <div onMouseEnter={() => setIsSideOptionsVisible(true)} onMouseLeave={() => setIsSideOptionsVisible(false)} className="relative">
      {isShowColor ? (
        <div>
          <div className="border-b-2 py-[8px] px-4 flex justify-between">
            <p className="font-semibold">Select A Color</p>
            <IoClose onClick={() => dispatch(hideColor(id))} size={25} className="hover:cursor-pointer" />
          </div>
          <div className=" p-3 bg-red  h-[224px]">
            <div className="grid grid-cols-8 gap-3 ">
              {fakeColorCount.map((item) => (
                <div key={item} className={`w-8 h-8 rounded-full overflow-hidden relative ${item}`}>
                  <div className="absolute flex justify-center items-center inset-0 text-white">
                    <FaCheck />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h3 className="text-center font-medium text-2xl mb-2">BLACK TITANIUM</h3>
          <h5 className="text-center font-semibold text-xl mb-2">
            696.00 <span className="font-medium text-sm">BDT</span>
          </h5>
          <div className="flex items-center justify-center gap-5 h-[20px]">
            <h5 className="text-center font- text-sm line-through">
              796.00 <span className="font-medium text-sm">BDT</span>
            </h5>
            <div className="text-[#00a76b] text-sm">(10% off)</div>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}

      {/* side options start */}
      {isSideOptionsVisible && (
        <div
          className={`absolute top-2/4 right-0 flex flex-col bg-opacity-15 bg-black rounded-ss-md rounded-es-md overflow-hidden hover:cursor-pointer`}
        >
          <div className="p-2">
            <FaRegHeart className="text-[#00a76b] hover:scale-[1.15] transition-all duration-200" size={20} />
          </div>
          <div className="p-2 border-t-2 border-b-2">
            <IoEyeOutline className="text-[#00a76b] hover:scale-[1.2] transition-all duration-200" size={20} />
          </div>
        </div>
      )}
      {/* side options end */}
    </div>
  );
};

export default ShowColorController;
