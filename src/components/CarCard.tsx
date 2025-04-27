import { Car } from "@/types/globals";
import Badge from "./Bagde";
import '@/styles/CarCard.scss';
import KeyValueDisplay from "./KeyValueDisplay";
import Rating from "./Rating";
import { CarEntity } from "@/models/Car";

type CarCardProps = {
 props: Car;
};

export default function CarCard ({props}:CarCardProps) {

 const car = new CarEntity(props);

 return <div className="carcard">
  <div className="carcard__img-wrapper">
   <img src={car.imageSrcSmall} alt={`Image d'une voiture du modele ${car.model} de la marque ${car.brand} `} className="carcard__img" />
  </div>
  <div className="carcard__content">
   <div className="carcard__content-left">
    <h2>{car.fullTitle}</h2>
    <p className="carcard__price">{car.readableCurrentPrice}</p>
    <Badge label={car.readableCommercialisedStatus}/>
    {
     car.reviews?.length ? <Rating rating={car.averageRating} numberOfRates={car.reviews.length} showText /> : null
    }
   </div>
   <div className="carcard__content-right">
    <KeyValueDisplay label="Vitesse max" value={car.readableMaxSpeed}/>
    <KeyValueDisplay label="Source d'énergie" value={car.energySource}/>
    <KeyValueDisplay label="Dimensions" value={car.readableDimensions}/>
   </div>
  </div>
 </div>
}