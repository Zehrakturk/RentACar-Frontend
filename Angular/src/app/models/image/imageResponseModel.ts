import { ResponseModel } from "../responseModel";
import { CarImage } from "./carImage";

export interface ImageResponseModel extends ResponseModel {
    data: CarImage[];
}

