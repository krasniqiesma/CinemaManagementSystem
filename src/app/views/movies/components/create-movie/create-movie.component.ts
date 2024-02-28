import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../movies-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  createMovieForm:any = FormGroup;

  constructor(private movieService: MovieService, private router:Router) { }

  ngOnInit() {
    this.createMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      shortSynopsis: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    if (this.createMovieForm.valid) {
      try {
        this.movieService.addMovie(this.createMovieForm.value);
        this.createMovieForm.reset();
        window.alert('Movie created. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      } catch (error:any) {
        if (error.message === 'A movie with these details already exists.') {
          window.alert('A movie with these details already exists. Please check your input.');
        } else {
          console.error('Error creating movie:', error);
          window.alert('Failed to create movie. Please try again.');
        }
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }

}
