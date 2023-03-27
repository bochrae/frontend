import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeSerService {
  private  apiUrl = 'http://localhost:8000/api/commande';

  constructor(private http: HttpClient) { }

  getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  getCommandeById(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiUrl}/${id}`);
  }


  addCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(this.apiUrl, commande);
  }
  

  updateCommande(commande: Commande): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${commande.id_commande}`, commande);
  }

  deleteCommande(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
