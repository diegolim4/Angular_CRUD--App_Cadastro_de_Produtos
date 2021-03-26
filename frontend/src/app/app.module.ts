import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component'

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from  '@angular/material/sidenav'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
    
  ],

  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
