import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firebaseConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvitadosService {
  constructor(private http: HttpClient) {}

  googleSheetUrl =
    'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbx8DaB_cls09M3xqsEwkKLkBDVDcl10OTjCK7yyVxXJy8nidsfl_kxpQkHHOUH0bPLmQw/exec';

  getGoogleSheetValue(): Observable<any> {
    return this.http.get(this.googleSheetUrl);
  }

  list() {
    return this.http.get(`${firebaseConfig.sheet.CONNECTION_URL}`);
  }
}
