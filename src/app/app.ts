import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { CartWidget } from './components/cart-widget/cart-widget';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CartWidget],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Mia_Crochet');
}
