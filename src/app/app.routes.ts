import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';
import { BoardsComponent } from './pages/boards/boards.component';

export const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'labs',
        component:LabsComponent
    },
    {
        path: 'boards',
        component:BoardsComponent
    },
];
        