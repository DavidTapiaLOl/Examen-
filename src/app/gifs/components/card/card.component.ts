import { Component, Input, input } from '@angular/core';
import { Gif } from '../../interfaces/giphy';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  // Nueva sintaxis de Inputs (Angular 17+)
  // (La rúbrica menciona @Input(), que también funciona: @Input() public gif!: Gif;)
  public gif = input.required<Gif>();
}