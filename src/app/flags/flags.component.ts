import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
})
export class FlagsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Name!: string;

  Show: boolean = false;

  Title1: string = 'Fun with flags';

  Title2: string = 'Fun with languages';

  Options1: string[] = [
    'Tuvalu',
    'Kiribati',
    'Marshall Islands',
    'Monserrat',
    'Niue',
  ];

  Options2: string[] = ['Taushiro', 'Tanema', 'Lemerig', 'Chamicuro', 'Njebi'];

  ImageRescources: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/800px-Flag_of_Kiribati.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/1200px-Flag_of_the_Marshall_Islands.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/1200px-Flag_of_Niue.svg.png',
  ];

  Sentences: string[] = [
    'Uñuntero',
    'Mamabo apika',
    "Mā'āv gewi",
    'Pejtayiko',
    'Wè ma sogha',
  ];

  setName(name: string) {
    this.Name = name;
    this.Show = true;
  }
}
