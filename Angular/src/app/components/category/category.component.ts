import { Component } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { Color } from 'src/app/models/color/color';
import { Customer } from 'src/app/models/customer/customer';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  
  brands:Brand[] = [];
  colors:Color[] = [];
  customers:Customer[] = [];
}
