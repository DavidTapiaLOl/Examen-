import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GiphyResponse } from '../interfaces/giphy'; // (Crearemos esta interfaz)

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // Dependencias
  private http = inject(HttpClient);
  
  // --- Claves y Endpoints ---
  // TODO: Reemplaza esto con tu propia API Key de Giphy
  private apiKey: string = 'JecLl0Pc5P9OYdMjWvtzDPKusnFCzfUa'; 
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  // --- Estado con Signals ---
  
  // Estado "mutable" (privado) para el historial 
  private _history = signal<string[]>([]);
  // Estado "mutable" (privado) para los resultados
  private _gifList = signal<Gif[]>([]);
  // Estado "mutable" (privado) para el indicador de carga
  private _isLoading = signal<boolean>(false);

  // Signals públicas (readonly) para consumir en componentes 
  public history = this._history.asReadonly();
  public gifList = this._gifList.asReadonly();
  public isLoading = this._isLoading.asReadonly();

  // --- Efectos (Effects) ---

  // effect() para guardar en LocalStorage cuando el historial cambie 
  private saveToLocalStorage = effect(() => {
    localStorage.setItem('gifHistory', JSON.stringify(this._history()));
  });

  constructor() {
    // Carga el historial desde LocalStorage al iniciar
    this.loadFromLocalStorage();
  }

  // --- Métodos ---

  private loadFromLocalStorage(): void {
    const history = localStorage.getItem('gifHistory');
    if (history) {
      this._history.set(JSON.parse(history));
      // Si hay historial, carga los GIFs de la última búsqueda
      if (this._history().length > 0) {
        this.searchTag(this._history()[0]);
      }
    }
  }

  private organizeHistory(tag: string): void {
    // Normaliza la entrada: minúsculas y sin espacios extra 
    tag = tag.toLowerCase().trim();
    if (tag.length === 0) return;

    // Evita duplicados y limita el historial (ej. a 10)
    this._history.update(currentHistory => {
      const filteredHistory = currentHistory.filter(t => t !== tag);
      return [tag, ...filteredHistory.slice(0, 9)];
    });
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    
    this.organizeHistory(tag);
    this._isLoading.set(true); // Activa el indicador de carga

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '12'); // Traemos 12 GIFs

    this.http.get<GiphyResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this._gifList.set(resp.data);
        this._isLoading.set(false); // Desactiva el indicador
      });
  }
}