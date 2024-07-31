"use client";

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const ShowSideMenuController = ({ children }: { children: React.ReactNode }) => {
  const [isSideOptionsVisible, setIsSideOptionsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsSideOptionsVisible(true)}
      onMouseLeave={() => setIsSideOptionsVisible(false)}
      className="relative max-w-[350px]"
    >
      {children}

      {/* side options start */}
      <div
        className={`absolute top-[40%] right-1 flex flex-col bg-opacity-15 bg-black rounded-ss-md rounded-es-md overflow-hidden  transition-all duration-300 ${
          isSideOptionsVisible ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <div className="p-2">
          <FaRegHeart className="text-[#00a76b] hover:scale-[1.15] transition-all duration-200" size={20} />
        </div>
        <div className="p-2 border-t-2 border-b-2">
          <IoEyeOutline className="text-[#00a76b] hover:scale-[1.2] transition-all duration-200" size={20} />
        </div>
      </div>
      {/* side options end */}
    </div>
  );
};

export default ShowSideMenuController;
