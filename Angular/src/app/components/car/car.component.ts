import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars:Car[]=[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService
    .getCars()
    .subscribe(response=>{
      this.cars=response.data;
    })
  }
  

}


