import { ReviewEntity } from "@/models/Review"
import { Reviews } from "@/types/globals"
import '@/styles/Review.scss'
import Rating from "./Rating";
import ImageWithFallback from "./ImageWithFallBack";

type ReviewProps = {
 props : Reviews
}

export default function Review ({props}: ReviewProps) {

 const review = new ReviewEntity(props);

 return (
  <div className="review">
   <div className="review__img-wrapper">
    <ImageWithFallback className="review__img" fallbackSrc={"/empty-avatar.png"} src={review.reviewer.avatar} alt={`Avatar de ${review.fullName}`} width={32} height={32}/>
   </div>
   <div className="review__content">
    <div className="review__content-header">
     <p className="review__name">{review.fullName}</p>
    <Rating rating={review.ratingToNumber} size={16}/>
    </div>
    <p className="review__date">{review.readableElapsedTime}</p>
    <p className="review__content-comment">
     {review.text}
    </p>
   </div>
  </div>
 )
}