import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FollowerPointerCard } from "../following-pointer";
import StarRatingReadOnly from "../StarRatingReadOnly";
import ShowSideMenuController from "./ShowSideMenuController";
import Link from "next/link";

const AddToCartCard = ({ id }: { id: string }) => {
  const fakeColorCount = ["bg-black", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
  return (
    // <FollowerPointerCard>
      <ShowSideMenuController>
        <div style={{ boxShadow: "0px 2px 6px 2px rgba(12, 107, 144, 0.10)" }} className="bg-white text-black rounded-2xl  ">
          <div className="">
            <p className="text-center text-xs mb-4 pt-4">TRENDING</p>
            <h3 className="text-center font-medium text-2xl mb-4">BLACK TITANIUM</h3>
            <p className="text-center text-sm mb-4">black solid titanium</p>
<Link href={'/login'}>
<Image src="https://i.ibb.co/HBXs7W2/zmt-KTo-Lo-S-0-RBR0101-S.jpg" className="mx-auto" width={400} height={400} alt="sunglasses" />
</Link>
            <StarRatingReadOnly rating={3.5} size={15} totalStars={5} color="#00a76b" className="mx-auto  w-min mb-[14px]" />
            <h5 className="text-center font-semibold text-xl mb-2">
              696.00 <span className="font-medium text-sm">BDT</span>
            </h5>
            <div className="flex items-center justify-center gap-5 h-[20px] ">
              <h5 className="text-center font- text-sm line-through">
                796.00 <span className="font-medium text-sm">BDT</span>
              </h5>
              <div className="text-[#00a76b] text-sm">(10% off)</div>
            </div>
          </div>
          {/* color start */}
          <div className="flex justify-center gap-5 items-center my-4">
            <p className="font-[580]">Color :</p>
            <div className="flex justify-end items-center gap-2">
              {fakeColorCount.map((item) => (
                <div key={item} className={`w-6 h-6 rounded-full overflow-hidden relative ${item}`}>
                  <div className="absolute flex justify-center items-center inset-0 text-white">
                    <FaCheck size={11} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* color end */}
          <div className="flex justify-center pb-4">
            <div className="bg-[#00a76b] text-white px-6 py-2 rounded-lg">ADD TO CART</div>
          </div>
        </div>
      </ShowSideMenuController>
    // </FollowerPointerCard>
  );
};

export default AddToCartCard;
