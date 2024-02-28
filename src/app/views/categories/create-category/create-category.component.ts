import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm:any = FormGroup
  categoryList: any = [];

  constructor(private categoryService: CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.createCategoryForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });

    this.categoryList = this.categoryService.getCategories();
  }

  onSubmit() {
    if(this.createCategoryForm.valid) {
      try{
        this.categoryService.addCategory(this.createCategoryForm.value);
        this.createCategoryForm.reset();
        window.alert('Category created. Click OK to see all categories!');
        this.router.navigateByUrl('/categories/all-categories');
      } catch (error:any) {
        window.alert('Failed to create category. Please try again.')
      }
    } else {
      window.alert('Form is not valid. Please check your input.')
    }
  }
}
