import AddToCartCard from "@/components/ui/AddToCartCard/AddToCartCard";
import MyContainer from "@/components/ui/MyContainer/MyContainer";
import PageHorizontalScrollCarousel from "@/components/ui/PageHorizontalScrollCarousel/PageHorizontalScrollCarousel";
import HeroSection from "./AllComponents/Home/HeroSection/HeroSection";
import ScrollAnimationEffect from "./AllComponents/Home/ScrollAnimationEffect/ScrollAnimationEffect";
import CenterZoomParallax from "@/components/ui/CenterZoomParallax/CenterZoomParallax";

const HomePage = () => {
  const fakeCardCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
    <CenterZoomParallax/>
      <HeroSection />
      <PageHorizontalScrollCarousel />
      <ScrollAnimationEffect />
      <MyContainer className="grid grid-cols-4 gap-10">
        {fakeCardCount.map((item) => (
          <AddToCartCard key={item} id={item.toString()} />
        ))}
      </MyContainer>
    </>
  );
};

export default HomePage;
