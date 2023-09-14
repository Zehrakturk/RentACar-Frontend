import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponsemodel';
import { Rental } from '../models/rental/rental';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService{

  url= "https://localhost:44369/api/rentals/";

  constructor(private httpClient:HttpClient) { }
  

  getRentals():Observable<ListResponseModel<Rental>> {
    let url =this.url+"getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(url);
  }
}
