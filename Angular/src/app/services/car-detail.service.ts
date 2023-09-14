import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponsemodel';
import { CarDetails } from '../models/car/carDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService implements OnInit{

  apiUrl = 'https://localhost:44369/api/cars/';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
