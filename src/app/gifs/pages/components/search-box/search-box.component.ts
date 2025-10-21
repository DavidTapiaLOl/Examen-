import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';


@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  // Inyecta el servicio
  private gifsService = inject(GifsService);

  // Usa @ViewChild para tomar la referencia local (#txtQuery) 
  @ViewChild('txtQuery')
  public tagInput!: ElementRef<HTMLInputElement>;

  // Método llamado por el (keyup.enter)
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    
    // Llama al método del servicio 
    this.gifsService.searchTag(newTag);
    
    // Limpia el input
    this.tagInput.nativeElement.value = '';
  }
}