import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from "../components/side-menu/side-menu-header/gifs-side-menu-header.component";
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { SearchBoxComponent } from "../components/search-box/search-box.component";
import { GifsService } from '../../services/gifs.service';
import { GifsSideMenuOptionComponent } from '../gifs-side-menu-option/gifs-side-menu-option.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionComponent, SideMenuComponent, SearchBoxComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent {
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
