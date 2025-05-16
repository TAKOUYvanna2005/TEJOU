import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enregistre-maison',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './enregistre-maison.component.html',
  styleUrls: ['./enregistre-maison.component.css']
})
export class EnregistreMaisonComponent {
  maisonForm: FormGroup;
  quartiers = [
    { id: '1', nom: 'Quartier Nord' },
    { id: '2', nom: 'Quartier Sud' },
    { id: '3', nom: 'Quartier Est' },
    { id: '4', nom: 'Quartier Ouest' }
  ];

  typesMaison = [
    { id: '1', nom: 'Duplex' },
    { id: '2', nom: 'Villa' },
    { id: '3', nom: 'Manoir' },
    { id: '4', nom: 'Appartement' }
  ];

  constructor(private fb: FormBuilder) {
    this.maisonForm = this.fb.group({
      adresse: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      superficie: ['', [Validators.required, Validators.min(1), Validators.max(10000)]],
      quartier: ['', Validators.required],
      typeMaison: ['', Validators.required],
      prix: ['', [Validators.min(0)]],
      photo: [null]
    });
  }

  onSubmit() {
    if (this.maisonForm.valid) {
      console.log('Données du formulaire:', this.maisonForm.value);
      // Ici vous ajouteriez la logique pour enregistrer la maison
      alert('Maison enregistrée avec succès!');
      this.maisonForm.reset();
    } else {
      this.maisonForm.markAllAsTouched();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validation du fichier ici
      this.maisonForm.patchValue({ photo: file });
    }
  }
}