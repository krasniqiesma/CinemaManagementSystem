import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movies-service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  editMovieForm:any = FormGroup;
  movieDetails:any
  movieId:any

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieId'];
    });
    this.editMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      shortSynopsis: new FormControl('', Validators.required),
    });
    this.fetchMovieDetails()
  }

  fetchMovieDetails(){
    this.movieDetails = this.movieService.getMovieById(JSON.parse(this.movieId));
    this.fillInputs();
  }

  fillInputs(){
    this.editMovieForm.get('title').setValue(this.movieDetails.title);
    this.editMovieForm.get('director').setValue(this.movieDetails.director);
    this.editMovieForm.get('category').setValue(this.movieDetails.director);
    this.editMovieForm.get('releaseDate').setValue(this.movieDetails.releaseDate);
    this.editMovieForm.get('shortSynopsis').setValue(this.movieDetails.shortSynopsis)
  }

  onSubmit() {
    if(this.editMovieForm.valid){
      try {
        let payload = {
          id:JSON.parse(this.movieId),
          title:this.editMovieForm.value.title,
          director:this.editMovieForm.value.director,
          category:this.editMovieForm.value.category,
          releaseDate:this.editMovieForm.value.releaseDate,
          shortSynopsis:this.editMovieForm.value.shortSynopsis
        }
        this.movieService.updateMovie(payload);
        this.editMovieForm.reset();
        window.alert('Movie edited. Click OK to see all users');
        this.router.navigateByUrl('/movies/all-movies');
      }catch (error: any) {
        console.log('Error editing movie:', error);
        window.alert('Failed tp edit movie. Please try again.');
      }
    }
  }
}
