import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpserviceService } from './services/httpservice.service';
import  { Movie} from './objectinterface';
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {
  constructor(
    private httpService : HttpserviceService
  ) {

  }

  ngOnInit(): void {
    this.data = this.httpService.getMovies().subscribe(
      (value: any) =>
        this.data = value
    );

  }

  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;

  title1: string = "show";
  title2: string = "show";

  data: any;
  allMovies: any;

  firstMovie!: Movie;



  showMovies(){
    this.clicked1 = !this.clicked1;
    this.title1 = this.checkClick(this.clicked1);
    this.allMovies = this.data.result;
  }

  showOneMovie(){
    this.clicked2 = !this.clicked2;
    this.title2 = this.checkClick(this.clicked2);
    this.allMovies = this.data.result;
    this.firstMovie = this.allMovies[0].properties;
  }

  checkClick(click: boolean){
    if (click == true)
      return "hide";
    else
      return "show";
  }

}


