import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zulopoly-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  getDiceNumbers(number: number) {
    return Array(number).fill(1).map((x, i) => i + 1);
  }

  rollDice() {
    // @ts-ignore
    const dice = [...document.querySelectorAll(".dice-list")];
    dice.forEach(d => {
      this.toggleClasses(d);
      d.dataset.roll = this.getRandomNumber(1, 6);
    });
  }

  private toggleClasses(dice) {
    dice.classList.toggle("odd-roll");
    dice.classList.toggle("even-roll");
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
