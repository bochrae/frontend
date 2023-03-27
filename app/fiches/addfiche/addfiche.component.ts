import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FicheTechnique } from 'src/app/models/FicheTechnique';
import { FicheserService } from 'src/app/services/ficheser.service';
@Component({
  selector: 'app-addfiche',
  templateUrl: './addfiche.component.html',
  styleUrls: ['./addfiche.component.css']
})
export class AddficheComponent {
  ficheForm!: FormGroup;
  http: any;

  constructor(private ficheService: FicheserService, private router: Router, private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.ficheForm = this.fb.group({
      url_fiche: ['', Validators.required],
      nom_fiche: [''],
      type_plat: ['']
    });
  }onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    this.http.post('/fiche/api/', formData).subscribe((response: any) => {
      console.log(response);
    });
   
  }

  onSubmit() {
    const newFiche: FicheTechnique = {
      id_fiche: 0,
      url_fiche: this.ficheForm.value.url_fiche,
      nom_fiche: this.ficheForm.value.nom_fiche,
      type_plat: this.ficheForm.value.type_plat,
    };
    this.ficheService.addFiche(newFiche).subscribe(
      () => {
        console.log(newFiche)
        console.log('la fiche est ajoutée')
        this.router.navigate(['/fiche']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

