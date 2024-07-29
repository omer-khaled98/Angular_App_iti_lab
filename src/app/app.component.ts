import { NavComponentComponent } from './nav-component/nav-component.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponentComponent,
    ProductComponentComponent,
    SliderComponentComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app1';
}
