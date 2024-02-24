import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListItemComponent } from './media-list-item/media-list-item.component';
import { FavrioteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { MediaItemService } from './services/media-item.service';
import { lookupListToken ,lookupLists } from './provider';

import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListItemComponent,
    FavrioteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
  //  MediaItemService
  // { provide: 'lookupListToken', useValue: lookupLists }
  { provide: lookupListToken, useValue: lookupLists } ,
  { provide: HttpXhrBackend, useClass: MockXHRBackend }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
