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
    "bamboo frame sunglasses"
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
      <div className=" w-full container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="text-2xl  me-36">LOGO</h3>
        </Link>
        <Menu setActive={setActive}>
          {/* <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem> */}
          <Link  href={"/"}><p onMouseEnter={()=> setActive(null)}>Home</p></Link>
          <MenuItem setActive={setActive} active={active} item="Sunglass">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Men"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Women"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Kids"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
         
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Optical glass">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <div className=" flex items-center gap-5 text-xs whitespace-nowrap">
          <button className={`${styles.accountButton} ${styles.textHoverEffect}`}>
            <BsPerson className="w-6 h-6" />

            <span className="relative">
              Account
              <span className={styles.text}>Account</span>
            </span>
          </button>

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
        <div className="w-full container mx-auto flex justify-end items-center py-2">
          <div className="  w-[35%]">
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
      {/* second row end*/}
    </div>
  );
};

export default PCNavBar;
