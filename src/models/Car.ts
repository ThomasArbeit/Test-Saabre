import { Car } from "@/types/globals";
import { formatCurrency, formatDateFr, formatDimensions, formatSpeed } from "@/utils/formatter";

export class CarEntity {
 id: number;
 brand: string;
 model: string;
 maxSpeed: number;
 energySource: string;
 dimensions: Car["dimensions"];
 pricing: Car["pricing"];
 commercializationDates: Car["commercializationDates"];
 reviews?: Car["reviews"];
 lastUpdated: string;
 electricDetails?: Car["electricDetails"];

 constructor(data: Car) {
  this.id = data.id;
  this.brand = data.brand;
  this.model = data.model;
  this.maxSpeed = data.maxSpeed;
  this.energySource = data.energySource;
  this.dimensions = data.dimensions;
  this.pricing = data.pricing;
  this.commercializationDates = data.commercializationDates;
  this.reviews = data.reviews;
  this.lastUpdated = data.lastUpdated;
  this.electricDetails = data.electricDetails;
 }

 
 public get fullTitle() : string {
  return `${this.brand} - ${this.model}`
 }

 
 public get fullSubtitle() : string {
  return `Voiture ${this.energySource} - ${this.model}, ${this.brand}`
 }
 
 
 public get isCommercialized() : boolean {
  return this.commercializationDates.end ? false : true;
 }

 public get readableLastUpdateDate() : string {
  return formatDateFr(this.lastUpdated);
 }
 
 public get readableCommercialisedStatus() : string {
  return this.commercializationDates.end ? 'Non commercialisé' : 'Commercialisé';
 }

 
 public get readableReleaseCommercializedDate() : string {
  return formatDateFr(this.commercializationDates.start);
 }

 
 public get readableEndCommercializedDate() : string {
  if (this.isCommercialized || !this.commercializationDates.end) return ''
  else return formatDateFr(this.commercializationDates.end);
 }
 
 
 public get hasRatings() : boolean {
  return this.reviews?.length ? true : false;
 }
 
 
 public get averageRating() : number | undefined {
  if (!this.reviews?.length) return
  let summ = 0;
  this.reviews.forEach(x => summ += parseInt(x.rating))
  return Number((summ / this.reviews.length).toFixed(1));
 }

 
 public get numberOfReviews() : number | undefined {
  if (!this.reviews?.length) return
  return this.reviews?.length;
 }

 
 public get readableMaxSpeed() : string {
  return formatSpeed(this.maxSpeed);
 }

 
 public get readableBasePrice() : string {
  return formatCurrency(this.pricing.basePrice);
 }

 public get readableCurrentPrice() : string {
  return formatCurrency(this.pricing.currentPrice);
 }

 
 public get readableDimensions() : string {
  return formatDimensions(this.dimensions);
 }
 
 
 
 public get imageSrcBig() : string {
  return `https://picsum.photos/seed/${this.id*10}/1087/600`;
 }
 
 public get imageSrcSmall() : string {
  return `https://picsum.photos/seed/${this.id*10}/200/116`;
 }
 
 
 
}