import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from "../components/side-menu/side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptionsComponent } from "../components/side-menu/side-menu-options/gifs-side-menu-options.component";
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { SearchBoxComponent } from "../components/search-box/search-box.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent, SideMenuComponent, SearchBoxComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
