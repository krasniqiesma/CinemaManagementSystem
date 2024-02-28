import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies-service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  
  movieList: any = []
  deletemovieModal:boolean = false
  clickedmovieData:any

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies()
  }

  fetchMovies(){
    this.movieList = this.movieService.getMovies();
  }

  deleteMovie(item: any){
    this.clickedmovieData = item
    this.deletemovieModal = true
  }

  deletemovieFromTable(movieId: number) {
    this.movieService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('Movie deleted. Click OK to se all movies')
    this.deletemovieModal = false
  }

  closeDeletemovieModal(){
    this.deletemovieModal = false
  }

}
