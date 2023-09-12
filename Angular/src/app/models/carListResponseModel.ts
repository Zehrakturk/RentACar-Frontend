import { Car } from "./car/car";
import { ResponseModel } from "./responseModel";

export interface CarListResponseModel extends ResponseModel{
    data:Car[],
};