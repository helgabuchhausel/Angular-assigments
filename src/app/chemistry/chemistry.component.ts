import { Component, OnInit } from '@angular/core';
import { riddle } from './riddle';
import { element } from './element';

@Component({
  selector: 'app-chemistry',
  templateUrl: './chemistry.component.html',
  styleUrls: ['./chemistry.component.css'],
})
export class ChemistryComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {
    this.randomize();
    this.choiceOfElement = this.elementMaker();

    setInterval(() => {
      this.randomize();
      this.choiceOfElement = this.elementMaker();
    }, this.interval);
  }

  rnd!: number;

  choiceOfElement: element;

  quizElement!: element;

  stopped!: boolean;

  interval: number = 2000;

  streak: number = 0;

  elements: element[] = [
    new element('hydrogen', 1, 'colorless', 'gas'),
    new element('lithium', 3, 'silvery', 'solid'),
    new element('carbon', 6, 'black', 'solid'),
    new element('fluorine', 9, 'yellow', 'gas'),
    new element('neon', 10, 'colorless', 'gas'),
    new element('sulfur', 16, 'yellow', 'solid'),
  ];

  questions: riddle[] = [
    new riddle('Atomic number'),
    new riddle('Color'),
    new riddle('State'),
  ];

  randomize() {
    this.rnd = Math.floor(Math.random() * this.elements.length);
  }

  elementMaker(): element {
    return this.elements[this.rnd];
  }

  riddleMaker(element: element) {
    this.questions[0].solution = element.atomNumber.toString();
    this.questions[1].solution = element.color;
    this.questions[2].solution = element.state;
  }

  toTheQuiz() {
    this.change();
    this.quizElement = this.elementMaker();
    this.riddleMaker(this.quizElement);
  }

  change() {
    this.stopped = !this.stopped;
  }

  compare(question: riddle, answer: string) {
    if (question.solution == answer) this.streak++;
    else this.streak = 0;
    this.quizElement = this.elementMaker();
    this.riddleMaker(this.quizElement);
  }
}
