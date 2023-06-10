import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaZiResponse } from 'src/models/bazi-response';
import { BaZiRequest } from 'src/models/bazi-request';

@Injectable({
  providedIn: 'root'
})
export class BaziExpertService {

  constructor(private httpClient: HttpClient) { }

  public explore(baZiRequest: BaZiRequest): Observable<BaZiResponse[]> {
    return this.httpClient.post<BaZiResponse[]>("https://us-central1-grand-voltage-172303.cloudfunctions.net/BaZiWrapper", baZiRequest);
  }
}
