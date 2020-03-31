import { AddTypeComponent } from './components/type-frais/add-type/add-type.component';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

 
/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 9 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 9 CRUD services */
import { ApiService } from './shared/api.service';
import { NoteTypeService} from './shared/note-type.service';

/* Reactive form services in Angular 9 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ApiService, NoteTypeService],
  entryComponents: [AddTypeComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
