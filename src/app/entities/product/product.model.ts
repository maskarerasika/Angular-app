export interface IProduct {
  _id?: string;
  name: string;
  brand: string;
  categoryName?:String;
}

export class Product implements IProduct {
  constructor(
    public name: string,
    public brand: string,
    public categoryName?:string,
    public _id?: string,
  ) {
    this._id = _id ? _id : null;
    this.name = name;
    this.brand = brand;
    this.categoryName = categoryName;
  }
}