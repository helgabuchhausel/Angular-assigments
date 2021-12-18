import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  GetMovies(){
    return this.http.get<IMovies>("https://www.swapi.tech/api/films/");
  }
}


// interfaces

export interface IMovies {
  message: string;
  results: IResult[];
}

export interface IProperties {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}

export interface IResult {
  properties: IProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
