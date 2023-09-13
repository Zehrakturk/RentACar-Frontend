import { Component } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {

  colors : Color[]=[];
  dataLoaded = false;

  constructor(private colorService:ColorService) {}

 ngOnInit():void{
  this.getBrands();
 }

 getBrands(){
   this.colorService
   .getBrands()
   .subscribe(response=>{
    this.colors = response.data;
   })
  }
}
