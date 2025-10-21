import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent implements OnInit {
  private gifsService = inject(GifsService);

  // Exponemos las signals públicas del servicio a la plantilla (HTML)
  public gifList = this.gifsService.gifList;
  public isLoading = this.gifsService.isLoading;

  ngOnInit(): void {
    // 💡 Llama al nuevo método aquí
    this.gifsService.getTrendingGifs(); 
  }
 }
