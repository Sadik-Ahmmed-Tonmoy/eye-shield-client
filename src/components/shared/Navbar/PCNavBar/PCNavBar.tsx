"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import MyFormInputAceternity from "@/components/ui/MyForm/MyFormInputAceternity/MyFormInputAceternity";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import ScrollButton from "@/components/ui/ScrollButton/ScrollButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import styles from "./PCNavBar.module.css";

interface BrandItem {
  id: number;
  title: string;
}

interface Brand {
  id: number;
  caption: string;
  list: BrandItem[];
}

interface DropDownWithSearchAndListProps {
  title: string;
}

interface TopBrand {
  id: number;
  caption: string;
  list: BrandItem[];
}

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

  const [brandList, setBrandList] = useState<Brand[]>([]);
  const [topBrandListArr, setTopBrandListArr] = useState<BrandItem[]>([]);
  const [FilteredBrandList, setFilteredBrandList] = useState<Brand[]>(brandList);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  // const { register, handleSubmit, watch, setValue } = useForm<{ search: string }>();

  // const watchSearch = watch("search");
  let watchSearch : any;
  let topBrandList: TopBrand[] = [{ id: 999999, caption: "Top Brands", list: [...topBrandListArr] }];

  useEffect(() => {
    if (watchSearch?.length > 0) {
      const filteredList: Brand[] = [];
      brandList.forEach((brand) => {
        const filteredItems = brand.list.filter((item) => item.title.toLowerCase().includes(watchSearch.toLowerCase()));
        if (filteredItems.length > 0) {
          filteredList.push({ ...brand, list: filteredItems });
        }
      });
      setFilteredBrandList(filteredList);
    } else {
      setFilteredBrandList(brandList);
    }
  }, [watchSearch, brandList]);

  const data = [
    {
      id: 1,
      caption: "A",
      list: [
        { id: 11, title: "apple" },
        { id: 12, title: "almond" },
      ],
    },
    {
      id: 2,
      caption: "B",
      list: [
        { id: 21, title: "ball" },
        { id: 22, title: "banana" },
      ],
    },
    {
      id: 3,
      caption: "C",
      list: [
        { id: 31, title: "cat" },
        { id: 32, title: "carrot" },
      ],
    },
    {
      id: 4,
      caption: "D",
      list: [
        { id: 41, title: "dog" },
        { id: 42, title: "date" },
      ],
    },
    {
      id: 5,
      caption: "E",
      list: [
        { id: 51, title: "elephant" },
        { id: 52, title: "eggplant" },
      ],
    },
    {
      id: 6,
      caption: "F",
      list: [
        { id: 61, title: "fox" },
        { id: 62, title: "fig" },
      ],
    },
    {
      id: 7,
      caption: "G",
      list: [
        { id: 71, title: "giraffe" },
        { id: 72, title: "grape" },
      ],
    },
    {
      id: 8,
      caption: "H",
      list: [
        { id: 81, title: "horse" },
        { id: 82, title: "honeydew" },
      ],
    },
    {
      id: 9,
      caption: "I",
      list: [
        { id: 91, title: "iguana" },
        { id: 92, title: "ice cream" },
      ],
    },
    {
      id: 10,
      caption: "J",
      list: [
        { id: 101, title: "jaguar" },
        { id: 102, title: "jelly" },
      ],
    },
    {
      id: 11,
      caption: "K",
      list: [
        { id: 111, title: "koala" },
        { id: 112, title: "kiwi" },
      ],
    },
    {
      id: 12,
      caption: "L",
      list: [
        { id: 121, title: "lion" },
        { id: 122, title: "lemon" },
      ],
    },
    {
      id: 13,
      caption: "M",
      list: [
        { id: 131, title: "monkey" },
        { id: 132, title: "melon" },
      ],
    },
    {
      id: 14,
      caption: "N",
      list: [
        { id: 141, title: "newt" },
        { id: 142, title: "nutmeg" },
      ],
    },
    {
      id: 15,
      caption: "O",
      list: [
        { id: 151, title: "owl" },
        { id: 152, title: "orange" },
      ],
    },
    {
      id: 16,
      caption: "P",
      list: [
        { id: 161, title: "penguin" },
        { id: 162, title: "pear" },
      ],
    },
    {
      id: 17,
      caption: "Q",
      list: [
        { id: 171, title: "quokka" },
        { id: 172, title: "quince" },
      ],
    },
    {
      id: 18,
      caption: "R",
      list: [
        { id: 181, title: "rhino" },
        { id: 182, title: "raspberry" },
      ],
    },
    {
      id: 19,
      caption: "S",
      list: [
        { id: 191, title: "snake" },
        { id: 192, title: "strawberry" },
      ],
    },
    {
      id: 20,
      caption: "T",
      list: [
        { id: 201, title: "tiger" },
        { id: 202, title: "tomato" },
      ],
    },
    {
      id: 21,
      caption: "U",
      list: [
        { id: 211, title: "umbrella bird" },
        { id: 212, title: "ugli fruit" },
      ],
    },
    {
      id: 22,
      caption: "V",
      list: [
        { id: 221, title: "vulture" },
        { id: 222, title: "vanilla" },
      ],
    },
    {
      id: 23,
      caption: "W",
      list: [
        { id: 231, title: "whale" },
        { id: 232, title: "watermelon" },
      ],
    },
    {
      id: 24,
      caption: "X",
      list: [
        { id: 241, title: "x-ray tetra" },
        { id: 242, title: "xylophone" },
      ],
    },
    {
      id: 25,
      caption: "Y",
      list: [
        { id: 251, title: "yak" },
        { id: 252, title: "yogurt" },
      ],
    },
    {
      id: 26,
      caption: "Z",
      list: [
        { id: 261, title: "zebra" },
        { id: 262, title: "zucchini" },
      ],
    },
  ];

  useEffect(() => {
    if (data) {
      setBrandList([...data]);
    }
    // if (data) {
    //     setTopBrandListArr([...data.list]);
    // }
  }, []);

  const alphabetList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleSubmit = (data: FieldValues, reset: any) => {
    console.log("Form Data:", data);
    // reset(); // Uncomment this line to reset the form after submission
  };
  return (
    <div className={`${styles.navbar} w-full dark:bg-black`}>
      {/* first row start */}
      <div className=" w-full container mx-auto flex justify-between items-center py-3">
        <Link href={"/"}>
          <h3 className="text-2xl me-32 ">LOGO</h3>
        </Link>

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
            <MenuItem setActive={setActive} active={active} item="Sunglasses" href="/ssss" className=" -translate-x-[500px]">
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
                    <Link href={""}>
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
            <MenuItem setActive={setActive} active={active} item="Optical Glasses" href="/ssss" className=" -translate-x-[690px]">
              <div className="  text-sm grid grid-cols-3 gap-10 p-4">
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div>
                    <Link href={""}>
                      <Image
                        src={
                          "https://img.freepik.com/premium-photo/confident-young-man-with-stylish-eyeglasses-trendy-green-background_1153477-20408.jpg?w=740"
                        }
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
                    <Link href={""}>
                      <Image
                        src={
                          "https://img.freepik.com/premium-photo/blond-woman-wearing-glasses-hat-posing-picture-generative-ai_1034973-93773.jpg?w=740"
                        }
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

            <MenuItem setActive={setActive} active={active} item="Brands" className=" -translate-x-[740px]">
              <div
                // style={{ boxShadow: "0px 4px 20px 0px rgba(36, 52, 58, 0.10)" }}
                className={`min-h-[412px] md:w-[728px] lg:w-[1000px] xl:w-[1202px] md:-left-[207px] lg:-left-[206px] xl:-left-[180px] 2xl:-left-14  z-10 flex top-[52px] rounded overflow-hidden `}
              >
                {/* left side start */}
                <div className=" w-5/12">
                  <div className="border-b-[1px] h- p-3">
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("search")}
                      placeholder="Search Brands"
                      className="input w-full ps-9 py-[6px]  rounded-sm"
                    />
                    <button className="absolute top-[10px] left-2" type="submit">
                    
                    </button>
                  </div>
                </form> */}

                    <MyFormWrapper onSubmit={handleSubmit} className="relative h-[45px]">
                      <MyFormInputAceternity name="email" placeholder="Enter Brand Name" inputClassName="" />
                      <button type="submit">
                        <IoSearchSharp size={20} className="absolute top-[13px] right-3" />
                      </button>
                    </MyFormWrapper>
                  </div>
                  <div className="relative">
                    <div className="max-h-[330px] overflow-hidden overflow-y-auto slim-scroll">
                      <>
                        {/* {watchSearch?.length > 0 || (
                      <>
                        {topBrandList?.map((items, i) => (
                          <div key={i} id={items.caption} className="px-5 ">
                            <h5 className="mt-4 mb-2  text-lg font-medium leading-normal">{items.caption}</h5>
                            <div className="mb-5">
                              {items.list.map((item, index) => (
                                <span
                                  onClick={() => {
                                    setValue("search", "");
                                    setIsBrandOpen(false);
                                  }}
                                  key={index}
                                >
                                  <Link href={`/product-filter?brand=${item?.id}`}>
                                    <p className={`text-sm font-normal leading-normal mb-2 hover:text-primary-color `}>{item?.title}</p>
                                  </Link>
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    )} */}
                      </>
                      {FilteredBrandList?.map((items, i) => (
                        <div key={i} id={items.caption} className="px-5 ">
                          <h5 className="mt-4  text-lg font-medium leading-normal">{items.caption}</h5>
                          <div className="mb-5">
                            {items.list.map((item, index) => (
                              <span
                                onClick={() => {
                                  // setValue("search", "");
                                  setIsBrandOpen(false);
                                }}
                                key={index}
                              >
                                <Link href={`/product-filter?brand=${item?.id}`}>
                                  <p className={`text-sm font-normal leading-normal mb-2 hover:text-primary-color `}>{item.title}</p>
                                </Link>
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex flex-col absolute top-2 right-2 overflow-hidden slim-scroll">
                        {alphabetList.map((item, index) => (
                          <ScrollButton key={index} to={item} name={item} />
                          // <div className="flex flex-col">{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* left side end */}
                {/* right side start */}
                <div className=" w-full">
                  <div className="border-b-[1px] py-[23px]">
                    <h4 className="text-center">Popular Brands</h4>
                  </div>
                  {/* brand images start */}
                  <div className="grid grid-cols-5 gap-5 p-8 h-[360px] overflow-hidden overflow-y-auto slim-scroll">
                    {/* Replace with your brand images logic */}
                  </div>
                  {/* brand images end */}
                </div>
                {/* right side end */}
              </div>
            </MenuItem>
           

            <MenuItem setActive={setActive} active={active} item="Blogs" href="/ssss" className=" -translate-x-[800px]">
              <div className="  text-sm grid grid-cols-3 gap-10 p-4">
             
                {/* per item with image start */}
                <div className="flex items-start gap-4">
                  <div className="h-36 w-36">
                    <Link href={""}>
                      <Image
                        src={
                          "https://img.freepik.com/premium-photo/blond-woman-wearing-glasses-hat-posing-picture-generative-ai_1034973-93773.jpg?w=740"
                        }
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
