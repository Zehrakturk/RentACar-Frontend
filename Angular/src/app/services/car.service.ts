import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/car/carDetails';
import { ListResponseModel } from '../models/listResponsemodel';
import { Car } from '../models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService{

  apiUrl="https://localhost:44369/api/cars/";  

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let url =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Car>>(url)
  }

  getCarDetails():Observable<ListResponseModel<CarDetails>> {
    let url =this.apiUrl+"getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(url);

  }

}
