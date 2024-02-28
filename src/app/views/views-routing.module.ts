import { RouterModule, Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";

const routes: Routes = [
    { path: '', component: ViewsComponent, children: [
        {path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
    ]}
]

export const ViewsRoutingModule = RouterModule.forChild(routes);