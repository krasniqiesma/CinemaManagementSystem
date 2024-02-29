import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../categories-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movies/movies-service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  editCategoryForm:any = FormGroup;
  categoryDetails:any
  categoryId:any

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
    this.editCategoryForm = new FormGroup({
      title: new FormControl('', Validators.required),
    });
    this.fetchMovieDetails()
  }

  fetchMovieDetails(){
    this.categoryDetails = this.categoriesService.getCategoryById(JSON.parse(this.categoryId));
    this.fillInputs();
  }

  fillInputs(){
    this.editCategoryForm.get('title').setValue(this.categoryDetails.title);
  }

  onSubmit() {
    if(this.editCategoryForm.valid){
      try {
        let payload = {
          id:JSON.parse(this.categoryId),
          title:this.editCategoryForm.value.title,
        }
        this.categoriesService.updateCategory(payload);
        this.editCategoryForm.reset();
        window.alert('Movie edited. Click OK to see all users');
        this.router.navigateByUrl('/movies/all-movies');
      }catch (error: any) {
        console.log('Error editing movie:', error);
        window.alert('Failed tp edit movie. Please try again.');
      }
    }
  }
}
