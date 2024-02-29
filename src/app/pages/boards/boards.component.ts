import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent,CdkAccordionModule,DragDropModule,FooterComponent],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {

}
