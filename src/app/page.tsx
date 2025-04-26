import Badge from "@/components/Bagde";
import CarCard from "@/components/CarCard";
import { Car } from "@/types/globals";


export default async function Home () {

 const response = await fetch('https://saabre-fake-api.osc-fr1.scalingo.io/cars?limit=50');
 const cars = await response.json();
 
 return <main>
 <h1>Toutes les voitures électriques et hybrides</h1>
  <ul>
   {cars.data.map((car: Car) => (
     <CarCard key={car.id} car={car}/>
   ))}
  </ul>
 </main>
}