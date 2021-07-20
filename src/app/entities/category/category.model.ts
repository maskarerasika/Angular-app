export interface ICategory {
    _id?: string;
    name: string;
  }
  
  export class Category implements ICategory {
    constructor(
      public name: string,
      public _id?: string,
    ) {
      this._id = _id ? _id : null;
      this.name = name;
    }
  }