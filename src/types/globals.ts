export type Dimension = {
 length: number,
 width: number,
 height: number,
};``

export type Pricing = {
 basePrice: string,
 currentPrice: string,
};

export type CommercializationDates = {
 start : string,
 end?: string,
};

export type Reviewer = {
 firstName: string,
 lastName: string,
 avatar: string,
};

export type Reviews = {
 reviewer: Reviewer,
 rating: string,
 text: string,
 reviewDate: string,
};

export type ElectricDetails = {
 batteryCapacity: number,
 maxRange: number,
 maxTorque: number,
};

export type Car = {
 id: number,
 brand: string,
 model: string,
 maxSpeed: number,
 energySource: string,
 dimensions: Dimension,
 pricing: Pricing,
 commercializationDates: CommercializationDates,
 reviews?: Reviews[],
 lastUpdated: string,
 electricDetails?: ElectricDetails;
};