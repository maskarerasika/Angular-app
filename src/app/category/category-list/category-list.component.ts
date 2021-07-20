import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CategoryService } from 'src/app/entities/category/category.service';
import { ICategory } from 'src/app/entities/category/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnChanges {

  categories: Array<ICategory> = [];
  @Input() categoryToDisplay: ICategory = null;

  constructor(protected categoryService: CategoryService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    if (this.categoryToDisplay !== null) {
      this.categories.push(this.categoryToDisplay);
    }
  }

  // Delete a product. 
  delete(id: string) {
    this.categoryService.delete(id).then((result: any) => this.loadAll());
  }

  // Load all products.
  private loadAll() {
    this.categoryService
      .get()
      .then((result: Array<ICategory>) => {
        this.categories = result;
      });
  }

}
