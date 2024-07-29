"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./DropDownWithSearchAndList.css";
import ScrollButton from "@/components/ui/ScrollButton/ScrollButton";
import Link from "next/link";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";

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

const DropDownWithSearchAndList: React.FC<DropDownWithSearchAndListProps> = ({ title }) => {
  const [active, setActive] = useState<string | null>(null);
  const [brandList, setBrandList] = useState<Brand[]>([]);
  const [topBrandListArr, setTopBrandListArr] = useState<BrandItem[]>([]);
  const [FilteredBrandList, setFilteredBrandList] = useState<Brand[]>(brandList);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const { register, handleSubmit, watch, setValue } = useForm<{ search: string }>();
  const onSubmit = (data: { search: string }) => {
    // Handle form submission
  };

  const watchSearch = watch("search");
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

  return (
    <div className="relative z-50" >
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Brand" href="" className=" -translate-x-[260px] p-1">
          {/* <div className="hover:cursor-pointer relative">
            <h5 className="hover:cursor-pointer py-4">{title}</h5>
          </div> */}

          <div
            // style={{ boxShadow: "0px 4px 20px 0px rgba(36, 52, 58, 0.10)" }}
            className={`min-h-[412px] md:w-[728px] lg:w-[1000px] xl:w-[1202px] md:-left-[207px] lg:-left-[206px] xl:-left-[180px] 2xl:-left-14  z-10 flex top-[52px] rounded overflow-hidden `}
          >
            {/* left side start */}
            <div className=" w-5/12">
              <div className="border-b-[1px] p-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("search")}
                      placeholder="Search Brands"
                      className="input w-full ps-9 py-[6px]  rounded-sm"
                    />
                    <button className="absolute top-[10px] left-2" type="submit">
                      {/* <img src={searchIcon} alt=""/> */}
                    </button>
                  </div>
                </form>
              </div>
              <div className="relative">
                <div className="max-h-[330px] overflow-hidden overflow-y-auto slim-scroll">
                  <>
                    {watchSearch?.length > 0 || (
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
                                    <p
                                      className={`text-sm font-normal leading-normal mb-2 hover:text-primary-color `}
                                    >
                                      {item?.title}
                                    </p>
                                  </Link>
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    )}
                  </>
                  {FilteredBrandList?.map((items, i) => (
                    <div key={i} id={items.caption} className="px-5 ">
                      <h5 className="mt-4  text-lg font-medium leading-normal">{items.caption}</h5>
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
                              <p
                                className={`text-sm font-normal leading-normal mb-2 hover:text-primary-color `}
                              >
                                {item.title}
                              </p>
                            </Link>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col absolute hrefp-2 right-2 overflow-hidden slim-scroll">
                    {alphabetList.map((item, index) => (
                      <ScrollButton key={index} to={item} name={item} isBrandOpen={isBrandOpen} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* left side end */}
            {/* right side start */}
            <div className=" w-full">
              <div className="border-b-[1px] py-3">
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
      </Menu>
    </div>
  );
};

export default DropDownWithSearchAndList;
