import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryDetails:any
  categoryId:any

  constructor(private categoriesService: CategoriesService, private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
   }

  ngOnInit(): void {
    this.fetchCategoryDetails();
  }

  fetchCategoryDetails() {
    this.categoryDetails = this.categoriesService.getCategoryById(JSON.parse(this.categoryId));
  }

}
