import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,SidebarComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
