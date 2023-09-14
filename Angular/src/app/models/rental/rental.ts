export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    carDescription:string;
    brandName:string;
    fullName:string;
    colorName:string;
    rentDate:Date;
    returnDate:Date;
}