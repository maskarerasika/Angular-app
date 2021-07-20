import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICategory, Category } from './category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private categoryUrl = '/api/category';

    constructor(private http: Http) { }

    // Get products
    get(): Promise<Array<ICategory>> {
        return this.http.get(this.categoryUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Create product
    create(category: Category): Promise<ICategory> {
        return this.http.post(this.categoryUrl, category)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Delete a product
    delete(id: string): Promise<any> {
        return this.http.delete(`${this.categoryUrl}/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}
