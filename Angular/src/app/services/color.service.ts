import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponsemodel';
import { Color } from '../models/color/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44369/api/colors/getall";  

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
}
