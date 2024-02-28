import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editCategoryForm:any = FormGroup;
  categoryList:any 
  categoryId:any
  categoryDetails:any
  constructor(private categoriesService: CategoriesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
    this.editCategoryForm = new FormGroup({
      title: new FormControl('', Validators.required)
    });
    // this.categoryList = this.userService.getUsers();
    this.fetchTaskDetails()
  }

  fetchTaskDetails() {
    this.categoryDetails =this.categoriesService.getCategoryById(JSON.parse(this.categoryId)); 
    this.fillInputs()
  }

  fillInputs(){
    this.editCategoryForm.get('title').setValue(this.categoryDetails.title);
  }


  onSubmit() {
    if (this.editCategoryForm.valid) {
      try {
        let payload = {
          id:JSON.parse(this.categoryId)
        }
        this.categoriesService.updateCategory(payload);
        this.editCategoryForm.reset();
        window.alert('Task edited. Click OK to see all tasks.');
        this.router.navigateByUrl('/categories/all-categories');
      } catch (error:any) {
        console.error('Error editing category:', error);
        window.alert('Failed to edit category. Please try again.');
      }
    } 
    console.log(this.editCategoryForm.valid);
  }

}
