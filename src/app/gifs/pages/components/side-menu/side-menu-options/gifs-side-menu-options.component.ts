import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../../services/gifs.service';

// 👇 ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ PRESENTE Y LA RUTA SEA CORRECTA
import { GifsSideMenuOptionComponent } from '../../../gifs-side-menu-option/gifs-side-menu-option.component'; 
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-gifs-side-menu-options',
  standalone: true,
  imports: [
    CommonModule,
    GifsSideMenuOptionComponent,
    RouterLink // <-- ASEGÚRATE DE QUE AQUÍ DICE "Option" (singular)
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {
  // Inyecta el servicio
  public gifsService = inject(GifsService);

  // Tus opciones de menú estáticas (Dashboard, Trending, Search)
  public menuOptions = [
    { icon: 'fa-solid fa-gauge', title: 'Dashboard', subtitle: 'Data and stats', router: '/dashboard' },
    { icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The best gifs', router: 'trending' },
    { icon: 'fa-brands fa-searchengin', title: 'Search', subtitle: 'Find your gifs', router: 'search' },
  ];

  // Método para buscar desde el historial
  searchFromHistory(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}