import { Component, OnInit } from '@angular/core';

import { HttpService, IMovies, IProperties } from './services/http.service';
import { StarwarsService, INewMovie } from './services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {
  constructor(
    private StarWarsService: HttpService,
    private NewMoviesService: StarwarsService
  ) {
    this.StarWarsService.GetMovies().subscribe((result) => {
      this.movies = result;
    });

    this.allNewMovies = this.NewMoviesService.GetMovies();
  }

  ngOnInit(): void {}

  movies!: IMovies;
  movie!: IProperties;

  displayMovie!: IStarWarsDisplay;
  allNewMovies: INewMovie[];

  api: boolean = false;
  clicked: boolean = false;
  crawl: boolean = false;
  add: boolean = false;
  see: boolean = false;
  del: boolean = false;

  title!: string;
  date!: string;

  MovieChoice(num: number) {
    this.movie = this.movies.results[num - 1].properties;
    this.displayMovie = {
      title: this.movie.title,
      release_date: this.movie.release_date,
      chars: this.movie.characters.length,
      planets: this.movie.planets.length,
      sship: this.movie.starships.length,
      vechicles: this.movie.vehicles.length,
      species: this.movie.species.length,
      opening_crawl: this.movie.opening_crawl,
    };
    this.clicked = !this.clicked;
  }

  MovieInput() {
    this.add = false;
    this.NewMoviesService.SetMovie(this.title, this.date);
  }
}

export interface IStarWarsDisplay {
  title: string;
  release_date: string;
  chars: number;
  planets: number;
  sship: number;
  vechicles: number;
  species: number;
  opening_crawl: string;
}
