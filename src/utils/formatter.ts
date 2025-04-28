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

export const formatDateFr = (dateString: string ) => {
 const date = new Date(dateString);

 return date.toLocaleString('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
 });
}

export const getElapsedTime = (commentDate: Date): string => {
 const now = new Date();
 const elapsedMs = now.getTime() - commentDate.getTime();

 const seconds = Math.floor(elapsedMs / 1000);
 const minutes = Math.floor(seconds / 60);
 const hours = Math.floor(minutes / 60);
 const days = Math.floor(hours / 24);
 const months = Math.floor(days / 30);
 const years = Math.floor(days / 365);

 if (years > 0) {
   return `il y a ${years} an${years > 1 ? 's' : ''}`;
 }
 if (months > 0) {
   return `il y a ${months} mois`;
 }
 if (days > 0) {
   return `il y a ${days} jour${days > 1 ? 's' : ''}`;
 }
 if (hours > 0) {
   return `il y a ${hours} heure${hours > 1 ? 's' : ''}`;
 }
 if (minutes > 0) {
   return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
 }
 return `il y a quelques secondes`;
}