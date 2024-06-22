import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseConfig } from 'src/environments/environment';
import { Invitado } from '../init/model/invitado.model';

@Injectable({
  providedIn: 'root',
})
export class InvitadosService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://sheet.best/api/sheets/35240873-a1b0-462c-b7fb-6f9c436ecc69';

  list() {
    return this.http.get(`${firebaseConfig.sheet.CONNECTION_URL}`);
  }

  updateSheet(invitado:Invitado){
    return this.http.put<Invitado>(`${firebaseConfig.sheet.CONNECTION_URL}/${invitado.id}`,{
      invitado
    })
  }
  addData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  replaceData(rowId: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${rowId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(url, data, { headers });
  }

  filteredUpdate(columnName: string, filter: any, data: Invitado): Observable<any> {
    const url = `${this.apiUrl}/${columnName}/${filter}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.patch<any>(url, data, { headers });
  }
}
