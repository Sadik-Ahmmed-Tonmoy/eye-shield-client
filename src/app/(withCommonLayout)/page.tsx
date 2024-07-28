import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import AddToCartCard from "@/components/ui/AddToCartCard/AddToCartCard";
import MyContainer from "@/components/ui/MyContainer/MyContainer";
import React from "react";

const HomePage = () => {
  const fakeCardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <MyContainer className="grid grid-cols-4 gap-10">
      
        {fakeCardCount.map((item) => (
          <AddToCartCard key={item} id={item.toString()} />
        ))}
      </MyContainer>
      
    </>
  );
};

export default HomePage;
