import { Car } from "@/types/globals";
import { useMemo } from "react";
import { formatCurrency, formatDimensions, formatSpeed } from "@/utils/formatter";
import Badge from "./Bagde";
import '@/styles/CarCard.scss';
import KeyValueDisplay from "./KeyValueDisplay";
import Rating from "./Rating";

type CarCardProps = {
 car: Car;
};

export default function CarCard ({car}:CarCardProps) {
 // Computed

 const isCommercialized = useMemo(() => {
  return car.commercializationDates.end ? 'Non commercialisé' : 'Commercialisé';
 }, [car.commercializationDates.end]);

 const averageRating = useMemo(() => {
  if (!car.reviews?.length) return
  let summ = 0;
  car.reviews.forEach(x => summ += parseInt(x.rating))
  return (summ / car.reviews.length).toFixed(1);
 },[car.reviews])

 // Template

 return <div className="carcard">
  <div className="carcard__img-wrapper">
   <img src={`https://picsum.photos/seed/${car.id*10}/200/116`} alt={`Image d'une voiture du modele ${car.model} de la marque ${car.brand} `} className="carcard__img" />
  </div>
  <div className="carcard__content">
   <div className="carcard__content-left">
    <h2>{car.brand} - {car.model}</h2>
    <p className="carcard__price">{formatCurrency(car.pricing.currentPrice)}</p>
    <Badge label={isCommercialized}/>
    {
     car.reviews?.length ? <Rating rating={averageRating} numberOfRates={car.reviews.length} /> : null
    }
   </div>
   <div className="carcard__content-right">
    <KeyValueDisplay label="Vitesse max" value={formatSpeed(car.maxSpeed)}/>
    <KeyValueDisplay label="Source d'énergie" value={car.energySource}/>
    <KeyValueDisplay label="Dimensions" value={formatDimensions(car.dimensions)}/>
   </div>
  </div>
 </div>
}