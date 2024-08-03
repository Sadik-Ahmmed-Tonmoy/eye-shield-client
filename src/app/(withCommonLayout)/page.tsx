import AddToCartCard from "@/components/ui/AddToCartCard/AddToCartCard";
import MyContainer from "@/components/ui/MyContainer/MyContainer";
import PageHorizontalScrollCarousel from "@/components/ui/PageHorizontalScrollCarousel/PageHorizontalScrollCarousel";
import ScrollAnimationEffect from "./AllComponents/Home/ScrollAnimationEffect/ScrollAnimationEffect";
import GridSection from "./AllComponents/Home/GridSection/GridSection";
import CenterZoomParallax from "@/components/ui/CenterZoomParallax/CenterZoomParallax";
import Test from "./AllComponents/Test";

const HomePage = () => {
  const fakeCardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
    {/* <Test/> */}
      <ScrollAnimationEffect />
     
     <GridSection/>
     
      <div className=" -mt-">
        <MyContainer className="grid grid-cols-4 gap-10">
          {fakeCardCount.map((item) => (
            <AddToCartCard key={item} id={item.toString()} />
          ))}
        </MyContainer>
      </div>

      {/* <CenterZoomParallax /> */}
      <PageHorizontalScrollCarousel />
    </>
  );
};

export default HomePage;
