import { Reviews } from "@/types/globals";
import { getElapsedTime } from "@/utils/formatter";

export class ReviewEntity {
 reviewer: Reviews["reviewer"];
 rating: string;
 text: string;
 reviewDate: string;

 constructor(data: Reviews) {
  this.reviewer = data.reviewer;
  this.rating = data.rating;
  this.text = data.text;
  this.reviewDate = data.reviewDate;
 }

 
 public get fullName() : string {
  return `${this.reviewer.firstName} ${this.reviewer.lastName}`
 }

 
 public get ratingToNumber() : number {
  return Number(this.rating);
 }
 
 
 public get readableElapsedTime() : string {
  return getElapsedTime(new Date(this.reviewDate));
 }
 
 
}