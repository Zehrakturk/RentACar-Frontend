import { ResponseModel } from "../responseModel";
import { Customer } from "./customer";

export interface CutomerResponseModel extends ResponseModel {
    data:Customer[];
}