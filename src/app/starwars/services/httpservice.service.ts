import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  url: string = "https://www.swapi.tech/api/films/";

  getMovies(){
    return this.http.get<any>(this.url);
  }

  getAllMovies(){

    let data;
    this.getMovies().subscribe(
    (value: any) =>
      data = value
  );
    return data;
}


}
