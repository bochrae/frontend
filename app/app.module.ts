import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandeComponent } from './commande/list/commande.component';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from './commande/update-commande/update-commande.component';

import { ListficheComponent } from './fiches/listfiche/listfiche.component';
import { AddficheComponent } from './fiches/addfiche/addfiche.component';
import { UpdateficheComponent } from './fiches/updatefiche/updatefiche.component';
@NgModule({
  declarations: [
    AppComponent,
    CommandeComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    ListficheComponent,
    AddficheComponent,
    UpdateficheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
