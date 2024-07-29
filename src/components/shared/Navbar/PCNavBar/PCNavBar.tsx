"use client";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import { MdOutlineShoppingBag } from "react-icons/md";
import styles from "./PCNavBar.module.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import DropDownWithSearchAndList from "../DropDownWithSearchAndList/DropDownWithSearchAndList";

const PCNavBar = () => {
  const [active, setActive] = useState<string | null>(null);
  console.log(active);

  // search bar start
  const placeholders = [
    "polarized sunglasses",
    "UV protection glasses",
    "blue light blocking glasses",
    "aviator sunglasses",
    "sports sunglasses",
    "prescription sunglasses",
    "designer sunglasses",
    "mirrored sunglasses",
    "round frame sunglasses",
    "retro style sunglasses",
    "wayfarer sunglasses",
    "oversized sunglasses",
    "kids sunglasses",
    "foldable sunglasses",
    "photochromic lenses",
    "gradient lenses",
    "cat eye sunglasses",
    "square frame sunglasses",
    "vintage sunglasses",
    "bamboo frame sunglasses",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  // search bar end

  return (
    <div className={`${styles.navbar} w-full dark:bg-black`}>
      {/* first row start */}
      <div className=" w-full container mx-auto flex justify-between items-center py-3">
        <Link href={"/"}>
          <h3 className="text-2xl  me-36">LOGO</h3>
        </Link>
        <DropDownWithSearchAndList title={"Brands"}/>
        <div className="  w-[35%]">
          <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>

        <div className=" flex items-center gap-5 text-xs whitespace-nowrap">
          <Link href={"/login"}>
            <button className={`${styles.accountButton} ${styles.textHoverEffect}`}>
              <BsPerson className="w-6 h-6" />

              <span className="relative">
                Account
                <span className={styles.text}>Account</span>
              </span>
            </button>
          </Link>

          <button className={`${styles.accountButton} ${styles.textHoverEffect}`}>
            <AiOutlineHeart className="w-6 h-6 " />
            <span className="relative">
              Wishlist
              <span className={styles.text}> Wishlist</span>
            </span>
            <p className="absolute -top-[6px] right-[0px] rounded-full bg-primary-color h-[18px] w-[18px] text-white flex items-center justify-center bg-[#00a76b] text-xs">
              0
            </p>
          </button>
          <button className={`${styles.accountButton} ${styles.textHoverEffect}`}>
            <MdOutlineShoppingBag className="w-6 h-6 " />

            <span className="relative">
              My Bag
              <span className={styles.text}>My Bag</span>
            </span>
            <p className="absolute -top-[6px] right-[1px] rounded-full h-[18px] w-[18px] text-white flex items-center justify-center bg-[#00a76b] text-xs">
              0
            </p>
          </button>

          <ThemeSwitcher />

          {/* cart floating button start */}
          {/* <div onClick={() => setOpen(true)}
                                   className={`${shakeCartFloatingButton ? "add-to-bag-cart-shake" : ""} absolute top-[200%] w-[80px] right-0 rounded-ss-lg rounded-es-lg overflow-hidden hover:cursor-pointer`}>
                                  <div className="bg-[#192038]  py-3 px-4 flex flex-col items-center">
                                      <PiShoppingBagOpenFill size={35} className="text-white"/>
                                      <p className="text-white font-Inter text-sm font-medium leading-normal tracking-[-0.42px] whitespace-nowrap">{cartData?.data?.cartData?.length} Items</p>
                                  </div>
                                  <div className="bg-[#0094CF]  py-3 px-4 flex flex-col items-center">
                                
                                      <p className="text-white font-Inter text-sm font-medium leading-normal tracking-[-0.42px] whitespace-nowrap">
                                          ৳
                                          {totalPriceAfterDiscount > 0 ? (
                                              <span className="ms-1">
                                                  <CountUp enableScrollSpy={true} duration={3} start={100} end={totalPriceAfterDiscount ? totalPriceAfterDiscount.toFixed(0) : 0}/>{" "}
                                              </span>
                                          ) : (
                                              <span className="ms-1">0</span>
                                          )}
                                      </p>
                                  </div>
                              </div> */}
          {/* floating button end*/}
        </div>
      </div>
      {/* first row end */}
      {/* second row start */}
      <div className="border-y-1">
        <div className="w-full container mx-auto flex justify-center items-center">
          <Menu setActive={setActive}>
            <Link href={"/"}>
              <p onMouseEnter={() => setActive("Home")}>
                <span className={`${active === "Home" ? "text-[#00a76b]" : ""} relative group`}>
                  Home
                  <span className="absolute left-0 -bottom-5 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                </span>
              </p>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Sunglasses" href="/ssss">
              <div className="  text-sm grid grid-cols-3 gap-10 p-4">
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div>
                    <Link href={""}>
                      <Image
                        src={"https://img.freepik.com/premium-photo/mens-sunglasses-no-background_943281-105141.jpg?w=740"}
                        className="rounded-md cursor-pointer"
                        height={150}
                        width={150}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                        Men&apos;s Sunglasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Casual
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Sports
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Luxury
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  </div>
                </div>
                {/* per item with image end */}
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div className="h-36 w-36">
                    <Link href={""} >
                      <Image
                        src={"https://img.freepik.com/premium-photo/woman-wearing-hat-sunglasses-is-posing-photo_1185498-16798.jpg?w=1380"}
                        className="rounded-md cursor-pointer h-full w-full"
                        height={150}
                        width={150}
                      
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                      Women&apos;s Sunglasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Casual
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Sports
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Luxury
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  </div>
                </div>
                {/* per item with image end */}
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div>
                    <Link href={""}>
                      <Image
                        src={"https://img.freepik.com/premium-psd/child-travel-style_510503-155.jpg?w=740"}
                        className="rounded-md cursor-pointer"
                        height={150}
                        width={150}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                      Kid&apos;s Sunglasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Boys
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Girls
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  
                  </div>
                </div>
                {/* per item with image end */}              
                <ProductItem
                  title="Polarized Sunglasses"
                  href=""
                  src="https://img.freepik.com/premium-photo/product-photography-green-outdoor-sunglass_162944-3148.jpg?w=740"
                  description="Reduce glare with polarized lenses"
                />
                <ProductItem
                  title="Sports Sunglasses"
                  href=""
                  src="https://cdn.road.cc/sites/default/files/styles/main_width/public/oakley-sutro2.jpg"
                  description="High-performance sports sunglasses"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Optical Glasses" href="/ssss">
              <div className="  text-sm grid grid-cols-3 gap-10 p-4">
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div>
                    <Link href={""}>
                      <Image
                        src={"https://img.freepik.com/premium-photo/confident-young-man-with-stylish-eyeglasses-trendy-green-background_1153477-20408.jpg?w=740"}
                        className="rounded-md cursor-pointer"
                        height={150}
                        width={150}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                        Men&apos;s Optical Glasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Casual
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Business
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Luxury
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  </div>
                </div>
                {/* per item with image end */}
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div className="h-36 w-36">
                    <Link href={""} >
                      <Image
                        src={"https://img.freepik.com/premium-photo/blond-woman-wearing-glasses-hat-posing-picture-generative-ai_1034973-93773.jpg?w=740"}
                        className="rounded-md cursor-pointer h-full w-full"
                        height={150}
                        width={150}
                      
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                      Women&apos;s Optical Glasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Casual
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Business
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                        Luxury
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  </div>
                </div>
                {/* per item with image end */}
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div>
                    <Link href={""}>
                      <Image
                        src={"https://static.zennioptical.com/marketing/category/kids/4tile/4_tile_var_b_1/kids_tlc_4Tile_xs.png"}
                        className="rounded-md cursor-pointer"
                        height={150}
                        width={150}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1 whitespace-nowrap">
                    <Link href={""}>
                      <h3 className={` hover:text-[#00a76b] text-xl w-min font-bold relative group cursor-pointer`}>
                      Kid&apos;s Optical Glasses
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </h3>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Boys
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                    <Link href={""}>
                      <p className={` hover:text-[#00a76b] w-min text-base font-medium relative group cursor-pointer`}>
                      Girls
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#00a76b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                      </p>
                    </Link>
                  
                  </div>
                </div>
                {/* per item with image end */}              
                <ProductItem
                  title="Blue Light Blocking Glasses"
                  href=""
                  src="https://isightinfo.com/wp-content/uploads/2019/02/a-pair-of-blue-light-blocking-glasses-from-kelowna-optometrists-1920x1366.jpeg"
                  description="Protect your eyes from blue light"
                />
                <ProductItem
                  title="Photochromic Lenses"
                  href=""
                  src="https://i.ebayimg.com/images/g/VkEAAOSwW-xjdlTA/s-l1200.webp"
                  description="Adaptive photochromic lenses"
                />
                <ProductItem
                  title="Anti-Reflective Coating"
                  href=""
                  src="https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/4460/2023/06/Glasses-On-The-Road.jpg"
                  description="Reduce glare with anti-reflective lenses"
                />
                <ProductItem
                  title="Computer Glasses"
                  href=""
                  src="https://www.cnet.com/a/img/toFeyyNRJ23GqHaZQFM-kfTJRYc/u003d/940x0/2020/07/17/e1c89e0d-6662-4bbc-b564-14a0b63544a4/blueease.jpg"
                  description="Glasses for computer use"
                />
              </div>
            </MenuItem>
         
            <MenuItem setActive={setActive} active={active} item="Brands">
              <div className="flex flex-col space-y-4 text-sm py-2 ps-2 pe-6">
                <HoveredLink href="">Ray-Ban</HoveredLink>
                <HoveredLink href="">Oakley</HoveredLink>
                <HoveredLink href="">Gucci</HoveredLink>
                <HoveredLink href="">Prada</HoveredLink>
                <HoveredLink href="">Versace</HoveredLink>
                <HoveredLink href="">Armani</HoveredLink>
                <HoveredLink href="">Dior</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* second row end*/}
    </div>
  );
};

export default PCNavBar;
