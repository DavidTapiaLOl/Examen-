import { Component, inject } from '@angular/core'; // <-- Importa inject
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
  imports: [
    CommonModule,
    GifsSideMenuOptionsComponent
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {
  // Inyecta el servicio
  public gifsService = inject(GifsService);

  // Tus opciones de menú estáticas (Dashboard, Trending, Search)
  public menuOptions = [
    { icon: 'fa-solid fa-gauge', title: 'Dashboard', subtitle: 'Data and stats', router: '/dashboard' },
    { icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The best gifs', router: '/trending' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Search', subtitle: 'Find your gifs', router: '/search' },
  ];

  // Método para buscar desde el historial
  searchFromHistory(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}