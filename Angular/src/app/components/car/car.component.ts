import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import {HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars:Car[]=[];
  apiUrl="https://localhost:44369/api/cars/getall";  
  constructor(private httpClient:HttpClient) {
  
    
  }
  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.httpClient
    .get<CarResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.cars = response.data;
    });
  }

}


