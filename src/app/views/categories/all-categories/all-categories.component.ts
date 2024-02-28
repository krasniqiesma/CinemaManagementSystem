import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories-service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categoryList: any = []
  deletecategoryModal:boolean = false
  clickedcategoryData:any

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(){
    this.categoryList = this.categoryService.getCategories();
  }

  deleteCategory(item: any){
    this.clickedcategoryData = item
    this.deletecategoryModal = true
  }

  deleteCategoryFromTable(categoryId: any) {
    this.categoryService.deleteCategory(categoryId);
    this.fetchCategories();
    window.alert('Category deleted, click OK  to see all categories')
    this.deletecategoryModal = false
  }

  closeDeleteCategoryModal(){
    this.deletecategoryModal = false
  }
}
