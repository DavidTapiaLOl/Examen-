import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gifs-side-menu-option',
  imports: [CommonModule, RouterModule], // Asegúrate que RouterModule esté aquí si usas [routerLink]
  standalone: true,
  templateUrl: './gifs-side-menu-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptionComponent { // <-- Nombre en singular
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public subtitle!: string;
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public router!: string;
}