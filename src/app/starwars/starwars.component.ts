import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from './services/httpservice.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private httpService : HttpserviceService
  ) {
  }

  ngOnInit(): void {
    this.data = this.httpService.getMovies().subscribe(
      (value: any) =>
        this.data = value
    );
  }

  api: boolean = false;

  data: any;
  allMovies: any;

  showMovies(){
    this.allMovies = this.data.result;
  }


}


