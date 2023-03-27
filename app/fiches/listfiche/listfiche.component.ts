import { Component, OnInit } from '@angular/core';


import { FicheTechnique } from '../../models/FicheTechnique';
import { FicheserService } from '../../services/ficheser.service';

@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.component.html',
  styleUrls: ['./listfiche.component.css']
})
export class ListficheComponent implements OnInit {

  fiches!: FicheTechnique[];

  constructor(private ficheService: FicheserService) { }

  ngOnInit(): void {
    this.getFiches();
  }

  getFiches(): void {
    this.ficheService.getAllFiches()
      .subscribe(fiches => this.fiches = fiches);
  }

  deleteFiche(id: number): void {
    this.ficheService.deleteFiche(id)
      .subscribe(() => {
        this.fiches = this.fiches.filter(f => f.id_fiche !== id);
      });
  }

}
