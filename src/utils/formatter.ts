import { Dimension } from "@/types/globals";

const convertMillimetersToMeters = (millimeters: number) => {
 const meters = millimeters / 1000;
 return meters.toFixed(1);
}

export const formatCurrency = (value: string) => {
 const number = parseFloat(value);
 return new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
 }).format(number);
}

export const formatSpeed = (value: number) => {
 return `${value} km/h`;
}

export const formatDimensions = (dimensions: Dimension) => {
 const height = convertMillimetersToMeters(dimensions.height);
 const length = convertMillimetersToMeters(dimensions.length);
 const width = convertMillimetersToMeters(dimensions.width);
 return `${length}mx${width}mx${height}m`;
}