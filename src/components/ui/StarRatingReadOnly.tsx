import { cn } from "@/lib/utils";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type TStarRatingReadOnlyProps = {
  rating?: number;
  totalStars?: number;
  size?: number;
  color?: string;
  scrollToReviews?: () => void;
  className?: string;
};

function StarRatingReadOnly({ rating = 0, totalStars = 5, size = 20, color = "#FFAC0A", scrollToReviews, className }: TStarRatingReadOnlyProps) {
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  // Create an array to store the star components
  const stars = [];

  // Add full stars to the array
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={`full-${i}`} color={color} size={size} />);
  }

  // Add a half star if applicable
  if (hasHalfStar) {
    stars.push(<BsStarHalf key="half" color={color} size={size} />);
  }

  // Add empty stars to complete the total number of stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={`empty-${i}`} color={color} size={size} />);
  }

  return (
    <div className={cn("flex gap-[6px]", className)} onClick={scrollToReviews ? scrollToReviews : undefined}>
      {stars}
    </div>
  );
}

export default StarRatingReadOnly;
