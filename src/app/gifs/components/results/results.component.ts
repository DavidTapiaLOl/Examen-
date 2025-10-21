import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component'; // Importa la tarjeta
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ CardComponent ], // Añade CardComponent a los imports
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  // Inyecta el servicio para acceder a los signals
  public gifsService = inject(GifsService);
}