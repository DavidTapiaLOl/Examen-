import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResultsComponent } from '../../components/results/results.component';

@Component({
  selector: 'app-search-page', // <-- Corregí el selector (era app-search-pge)
  standalone: true, // <-- Añade standalone: true
  imports: [ ResultsComponent ], // <-- Añade ResultsComponent
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { }