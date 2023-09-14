import { Component } from '@angular/core';
import { CarDetails } from 'src/app/models/car/carDetails';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  carDetails:CarDetails[]=[];

  constructor(private carDetailService: CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carDetailService
    .getCarDetails()
    .subscribe(response=>{
      this.carDetails=response.data;
    })
  }
}
