import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Output, PLATFORM_ID } from '@angular/core';
import { CATEGORIES } from '../../data/productos';

@Component({
  selector: 'app-product-menu',
  imports: [CommonModule],
  templateUrl: './product-menu.html',
  styleUrl: './product-menu.scss',
})
export class ProductMenu {
  categories = CATEGORIES;
  slidesPerView = 3; // 3 desktop, 2 tablet, 1 móvil
  current = 0; // índice de la “página” (desplazamiento)
  private touchStartX: number | null = null;
  

  @Output() categoriaSeleccionada = new EventEmitter<string>();
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    this.updateSlidesPerView();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSlidesPerView();
  }

  private updateSlidesPerView() {
    if (!isPlatformBrowser(this.platformId)) return;
    const w = window.innerWidth;
    this.slidesPerView = w < 640 ? 1 : w < 1024 ? 2 : 3;
    // Ajusta el índice si cambia el número visible
    const max = Math.max(0, this.categories.length - this.slidesPerView);
    this.current = Math.min(this.current, max);
  }

  prev() {
    this.current = Math.max(0, this.current - 1);
  }
  
  next() {
    const max = Math.max(0, this.categories.length - this.slidesPerView);
    this.current = Math.min(max, this.current + 1);
  }

  get translatePct(): string {
    // cada "paso" mueve 100/slidesPerView %
    const step = 100 / this.slidesPerView;
    return `translateX(-${this.current * step}%)`;
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0]?.clientX ?? null;
  }

  onTouchEnd(e: TouchEvent) {
    if (this.touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(diff) > 50) diff < 0 ? this.next() : this.prev();
    this.touchStartX = null;
  }

  seleccionar(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }
}
