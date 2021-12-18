export class element {
  name: string;
  atomNumber: number;
  color: string;
  link: string;
  state: string;
  linkBase: string = 'https://images-of-elements.com/';

  constructor(name: string, number: number, color: string, state: string) {
    this.atomNumber = number;
    this.name = name;
    this.color = color;
    this.state = state;
    this.link = this.linkBase + this.name + '.jpg';
  }
}
