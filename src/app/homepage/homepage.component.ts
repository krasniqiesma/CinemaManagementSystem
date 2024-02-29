import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../views/categories/categories-service';
import { MovieService } from '../views/movies/movies-service';
import { Router } from '@angular/router'; // Import Router
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  categoryList: any = [];
  movieList: any = [];
  constructor( private categoriesService: CategoriesService, private movieService: MovieService, private router: Router) { }
  ngOnInit(): void {
    this.fetchCategories();
    this.loadMovies();
  }
  fetchCategories() {
    this.categoryList = this.categoriesService.getCategories();
  }

  loadMovies(): void {
    this.movieList = this.movieService.getMovies();
  }
}