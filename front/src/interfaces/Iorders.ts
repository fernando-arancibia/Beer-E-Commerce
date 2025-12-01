import { IProduct } from "./IProduct";

export interface IOrder {
    date: string;
    id: number;
    products: IProduct[];
    status: string;
}