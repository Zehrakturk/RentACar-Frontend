import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarListResponseModel } from 'src/app/models/car/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  cars:Car[]=[];
  //carResponseModel:CarListResponseModel;
  /**
   *
   */
  constructor() {
  
    
  }
  ngOnInit(): void {
    console.log("initt çalişti");
  }

  getCars(){
    
  }

}


