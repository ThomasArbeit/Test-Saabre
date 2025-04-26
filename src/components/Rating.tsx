import {Star, StarHalf, StarOff} from "lucide-react";
import '@/styles/Rating.scss'

type RatingProps = {
 rating?: number;
 numberOfRates?: number;
 size?: number;
 showText?: boolean;
};

export default function Rating ({rating, numberOfRates, size = 20, showText = false} : RatingProps) {
 const fullStars = rating ? Math.floor(rating) : 0;
 const emptyStars = 5 - fullStars;

 return (
  <div className="rating">
   <div className="rating__stars">
    {[...Array(fullStars)].map((_, i) => (
      <Star  key={`full-${i}`} className="rating__star" size={size} />
    ))}
    {[...Array(emptyStars)].map((_, i) => (
      <Star key={`empty-${i}`} className="rating__star rating__star--off" size={size} />
    ))}
   </div>
   {
    showText &&
      <span className="rating__text">
      {rating} - {numberOfRates} avis
      </span>
   }
  </div>
 )
}