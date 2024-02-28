import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { AllCategoriesComponent } from "./all-categories/all-categories.component";
import { CategoryDetailsComponent } from "./category-details/category-details.component";
import { CreateCategoryComponent } from "./create-category/create-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";

const routes: Routes = [
    {
        path: 'categories', component: CategoriesComponent, children: [
            {path: 'all-categories',component: AllCategoriesComponent },
            {path: 'category-details/:id',component: CategoryDetailsComponent},
            {path: 'create-category',component:CreateCategoryComponent},
            {path: 'edit-category/:id', component: EditCategoryComponent}
        ]
    }
];
export const CategoriesRoutingModule = RouterModule.forChild(routes);