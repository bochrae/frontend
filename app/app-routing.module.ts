import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommandeComponent } from './commande/add-commande/add-commande.component';
import { CommandeComponent } from './commande/list/commande.component';
import { AddficheComponent } from './fiches/addfiche/addfiche.component';
import { ListficheComponent } from './fiches/listfiche/listfiche.component';

const routes: Routes = [
  {path: 'commande', component: CommandeComponent},
  {path: 'addc', component: AddCommandeComponent},
  {path: 'fiche', component: ListficheComponent},
  {path: 'addf', component: AddficheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
