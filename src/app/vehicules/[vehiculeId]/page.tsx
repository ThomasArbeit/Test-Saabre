import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import KeyValueDisplay from "@/components/KeyValueDisplay";
import Rating from "@/components/Rating";
import Review from "@/components/Review";
import { CarEntity } from "@/models/Car";
import { Reviews } from "@/types/globals";
import { formatDateFr } from "@/utils/formatter";
import Image from "next/image";

type Params = {
  vehiculeId: string;
};

export default async function ModalVehiculeDetail({ params }: { params: Params }) {
  const paramsAvaited = await params;
  const res = await fetch(`https://saabre-fake-api.osc-fr1.scalingo.io/cars/${paramsAvaited.vehiculeId}`, { cache: "no-store" });
  const data = await res.json();
  const car = new CarEntity(data.data);

  return (
    <>
    <div className="page">
      <BackButton></BackButton>
      <header className="page__header">
        <div className="page__header-text">
          <h1 className="page__header-title">{car.fullTitle}</h1>
          <p className="page__header-annotation">Derniere mise a jour : {formatDateFr(car.lastUpdated)}</p>
        </div>
        <Image className="page__header-img" src={car.imageSrcBig} width={1087} height={600} alt={`Image d'une voiture du modele ${car.model} de la marque ${car.brand}`}></Image>
      </header>
      <div className="page__main">
        <div className="page__content">
        <div className="page__subheader">
          <h2>{car.fullSubtitle}</h2>
          {
            car.hasRatings &&
            <Rating rating={car.averageRating} numberOfRates={car.numberOfReviews} showText/>
          }
        </div>
          <section className="page__section">
            <h3 className="page__section-title">Description</h3>
            <KeyValueDisplay label="Source d’énergie" value={car.energySource}/>
            <KeyValueDisplay label="Vitesse max" value={car.readableMaxSpeed}/>
            <KeyValueDisplay label="Dimensions" value={car.readableDimensions}/>
            <KeyValueDisplay label="Statut" value={car.readableCommercialisedStatus}/>
            <KeyValueDisplay label="Prix sortie commerciale" value={car.readableBasePrice}/>
            <KeyValueDisplay label="Date de sortie commerciale" value={car.readableReleaseCommercializedDate}/>
          </section>
          <section className="page__section">
            <h3 className="page__section-title">
              Avis ({car.numberOfReviews ?? '0'})
            </h3>
            {car.reviews?.length ? (
              car.reviews.map((review: Reviews, index: number) => (
                <Review key={index} props={review} />
              ))
            ) : (
              <p>Aucun avis disponible.</p>
            )}
          </section>
        </div>
        <aside className="page__aside">
          <div className="cta-card">
            <h4>{car.fullTitle}</h4>
            <KeyValueDisplay label="Prix moyen actuel" value={car.readableCurrentPrice}/>
            <Button text="Voir les annonces" leftIcon="eye"/>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}
 