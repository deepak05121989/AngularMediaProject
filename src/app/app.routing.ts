import { Routes,RouterModule  } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaListItemComponent } from './media-list-item/media-list-item.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaListItemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];
export const routing = RouterModule.forRoot(appRoutes);