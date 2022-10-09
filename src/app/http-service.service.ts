import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {  }
  getListOfAllImages() {
    
    console.log("to get all apps api>>>");
    const options = { headers: { 'Content-Type': 'application/json' } };
    return this.httpClient.get<any>("https://picsum.photos/v2/list?page=2&limit=100",options);
  }

}
