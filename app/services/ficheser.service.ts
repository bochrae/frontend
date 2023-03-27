
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheTechnique } from '../models/FicheTechnique';


@Injectable({
  providedIn: 'root'
})
export class FicheserService {
  private apiUrl = 'http://localhost:8000/api/fiche'; 

  constructor(private http: HttpClient) { }

  getAllFiches(): Observable<FicheTechnique[]> {
    return this.http.get<FicheTechnique[]>(this.apiUrl);
  }

  getFicheById(id: number): Observable<FicheTechnique> {
    return this.http.get<FicheTechnique>(`${this.apiUrl}${id}/`);
  }

  addFiche(fiche: FicheTechnique): Observable<any> {
    return this.http.post(this.apiUrl, fiche);
  }

  updateFiche(fiche: FicheTechnique): Observable<any> {
    return this.http.put(`${this.apiUrl}${fiche.id_fiche}/`, fiche);
  }

  deleteFiche(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('/api/upload', formData);
  }
}
