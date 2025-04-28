import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import ImageWithFallback from "@/components/ImageWithFallBack";
import KeyValueDisplay from "@/components/KeyValueDisplay";
import Rating from "@/components/Rating";
import Review from "@/components/Review";
import { CarEntity } from "@/models/Car";
import { Reviews } from "@/types/globals";
import { formatDateFr } from "@/utils/formatter";

type Params = {
  vehiculeId: string;
};

export default async function VehiculeDetail({ params }: { params: Promise<Params> }) {
  const {vehiculeId} = await params;
  const res = await fetch(`https://saabre-fake-api.osc-fr1.scalingo.io/cars/${vehiculeId}`);
  const data = await res.json();
  const car = new CarEntity(data.data);

  return (
    <>
    <div className="page">
      <section className="page__header">
      <div className="page__header-title-zone">
        <div className="page__header-back-btn"> 
          <BackButton></BackButton>
        </div>
        <h1 className="page__header-title">{car.fullTitle}</h1>
      </div>
      <div className="page__header-img-wrapper">
        <ImageWithFallback src={car.imageSrcBig} alt={`Image d'une voiture du modele ${car.model} de la marque ${car.brand} `} fallbackSrc={"/empty-img.png"}></ImageWithFallback>
      </div>
      </section>
      <section className="page__main">
        <div className="page__content">
        <div className="page__subheader">
          <p className="page__header-annotation">Derniere mise a jour : {formatDateFr(car.lastUpdated)}</p>
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
            <h4 className="cta-card__title">{car.fullTitle}</h4>
            <KeyValueDisplay label="Prix moyen actuel" value={car.readableCurrentPrice}/>
            <Button text="Voir les annonces" leftIcon="eye"/>
          </div>
        </aside>
      </section>
    </div>
    </>
  );
}
 