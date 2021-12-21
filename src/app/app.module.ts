import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { TextEditorComponent } from './component/text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,

    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule,
    AngularEditorModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
