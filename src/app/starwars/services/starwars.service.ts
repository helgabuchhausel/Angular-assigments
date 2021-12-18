import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor() { }

  allNewMovies: INewMovie[]  = [];
  newMovie: INewMovie | undefined;

  SetMovie(movieTitle: string, movieDate: string){
    this.allNewMovies.push({
      title: movieTitle,
      release_date: movieDate
    });
  }

  GetMovies(){
    return this.allNewMovies;
  }

}

export interface INewMovie{
  title: string;
  release_date: string;
}
