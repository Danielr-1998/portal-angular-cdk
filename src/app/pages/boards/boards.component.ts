import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent,CdkAccordionModule],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
