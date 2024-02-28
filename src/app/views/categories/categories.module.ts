import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesComponent,
    AllCategoriesComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CategoriesModule { }
