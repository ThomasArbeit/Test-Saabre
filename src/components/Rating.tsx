import {Star, StarHalf, StarOff} from "lucide-react";
import '@/styles/Rating.scss'

type RatingProps = {
 rating?: number;
 numberOfRates?: number;
};

export default function Rating ({rating, numberOfRates} : RatingProps) {
 const fullStars = Math.floor(rating);
 const emptyStars = 5 - fullStars;

 return (
  <div className="rating">
   <div className="rating__stars">
    {[...Array(fullStars)].map((_, i) => (
      <Star  key={`full-${i}`} className="rating__star" />
    ))}
    {[...Array(emptyStars)].map((_, i) => (
      <Star key={`empty-${i}`} className="rating__star rating__star--off" />
    ))}
   </div>
   <span className="rating__text">
    {rating} - {numberOfRates} avis
   </span>
  </div>
 )
}