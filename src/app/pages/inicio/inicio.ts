import { Component } from '@angular/core';
import { ProductMenu } from '../../components/product-menu/product-menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule,
    ProductMenu
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {

}
