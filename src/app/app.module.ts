import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { PokemonDetailComponent } from './components/about/pokemon-detail.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ItemListComponent,
    SidebarComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
