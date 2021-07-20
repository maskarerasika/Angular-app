import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/entities/category/category.service';
import { ICategory, Category } from 'src/app/entities/category/category.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  CategoryForm: FormGroup;
  name: string = '';
  error: boolean = false;

  @Output() createdCategory = new EventEmitter<ICategory>();

  constructor(protected CategoryService: CategoryService, protected formBuilder: FormBuilder) { }

  // Init the form when starting the view.
  ngOnInit(): void {
    this.initForm();
  }

  // Manage the submit action and create the new product.
  onSubmit() {
    const category = new Category(this.CategoryForm.value['name'], null);
    this.CategoryService.create(category).then((result: ICategory) => {
      if (result === undefined) {
        this.error = true;
      } else {
        this.error = false;
        this.createdCategory.emit(result);
      }
    });
  }

  // Hide the error message.
  hideError() {
    this.error = false;
  }

  // Init the creation form.
  private initForm() {
    this.CategoryForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
    });
  }

}
