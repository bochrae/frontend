import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../../models/Commande';
import { CommandeSerService } from '../../services/commande-ser.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes: Commande[]=[];
  selectedCommande!: Commande;

commande: any;

  constructor(private commandeService: CommandeSerService, private router: Router) { }

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes(): void {
    this.commandeService.getCommandes().subscribe(commandes => this.commandes = commandes);
  }

  selectCommande(commande: Commande): void {
    this.selectedCommande = commande;
  }

  addCommande(): void {
    const newCommande: Commande = {
      id_commande: 0,
      date_commande: '',
      type_commande: '',
      etat_commande: '',
      quantite: '',
      specificite_regime: '',
      specificite_texture: '',
      type_auth: ''
    };
    this.commandeService.addCommande(newCommande).subscribe(
      () => {
        this.getCommandes();
        this.router.navigate(['/addc']); 
      },
      () => alert('Erreur lors de l\'ajout de la commande')
    );
  }
  

  updateCommande(): void {
    this.commandeService.updateCommande(this.selectedCommande).subscribe(
      () => {
        this.getCommandes();
        
        alert('Commande mise à jour avec succès');
      },
      () => alert('Erreur lors de la mise à jour de la commande')
    );
  }

  deleteCommande(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      this.commandeService.deleteCommande(id).subscribe(
        () => {
          this.getCommandes();
          alert('Commande supprimée avec succès');
        },
        () => alert('Erreur lors de la suppression de la commande')
      );
    }
  }

 

}
