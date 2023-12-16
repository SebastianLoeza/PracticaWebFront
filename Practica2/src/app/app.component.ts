import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './servicios/producto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponentComponent,FooterComponentComponent,ContentComponentComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[ProductoService]
})
export class AppComponent {
  title = 'Practica 7';
}
