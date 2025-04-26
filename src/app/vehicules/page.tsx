import CarCard from "@/components/CarCard";
import { Car } from "@/types/globals";
import Link from "next/link";

type SearchParamsProps = {
 searchParams: {limit?: string, offset?: string};
};

export default async function Vehicules ({ searchParams } : SearchParamsProps) {
 const searchParamsAwaited = await searchParams;
 const limit = parseInt(searchParamsAwaited?.limit || '10');
 const offset = parseInt(searchParamsAwaited?.offset || '0');
 const currentPage = Math.floor(offset / limit) + 1;

 const response = await fetch(`https://saabre-fake-api.osc-fr1.scalingo.io/cars?limit=${limit}&offset=${offset}`);
 const jsonResponse = await response.json();
 const meta = jsonResponse.meta;
 const data = jsonResponse.data;
 const cars: Car[] = data;

 const totalPages = Math.ceil(meta.total / limit);

 return (
  <main>
    <h1>Catalogue Voiture</h1>
    <ul>
      {cars.map((car: Car) => (
        <Link key={car.id} href={`/vehicules/${car.id}`}>
          <CarCard props={car} />
        </Link>
      ))}
    </ul>

    {/* <div className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={i}
          scroll={true}
          href={`/vehicules?limit=${limit}&offset=${i * limit}`}
          className={i + 1 === currentPage ? "pagination__link pagination__link--active" : " pagination__link"}
        >
          {i + 1}
        </Link>
      ))}
    </div> */}
  </main>
);
}