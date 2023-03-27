import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commande } from 'src/app/models/Commande';
import { CommandeSerService } from 'src/app/services/commande-ser.service';


@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  myForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private commandeService: CommandeSerService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['client', Validators.required],
      quantite: ['', Validators.required],
      regime: ['Aucun', Validators.required],
      texture: ['Aucun', Validators.required]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }

    const commande: Commande = {
      date_commande: this.f['date'].value,
      type_commande: this.f['type'].value,
      quantite: this.f['quantite'].value,
      specificite_regime: this.f['regime'].value,
      specificite_texture: this.f['texture'].value,
      id_commande: 0,
      etat_commande: '',
      type_auth: ''
    };

    this.commandeService.addCommande(commande).subscribe((result: any) => {
      console.log(result);
      alert('Commande ajoutée avec succès!');
      this.myForm.reset();
    });
  }
}
