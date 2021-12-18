import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flags-child',
  templateUrl: './flags-child.component.html',
  styleUrls: ['./flags-child.component.css'],
})
export class FlagsChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('title')
  Title!: string;

  @Input('options')
  Options!: string[];

  @Input('resources')
  Resources!: string[];

  @Input('isText')
  IsText: boolean = true;

  counter!: number;
}
