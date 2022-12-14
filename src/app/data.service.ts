import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable,retry,throwError } from 'rxjs'
import { SolarBodies,Options } from './interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "https://api.le-systeme-solaire.net/rest/bodies";


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  //This method returns all the solar stars
  GetAllSolarBodies(p: Number): Observable<SolarBodies>
  {
    const url = `${this.REST_API_SERVER}?page=${p},${10}?data=name,englishName,discoveredBy,discoveryDate,isPlanet,id`;  
    return this.httpClient.
    get<SolarBodies>(url)
    .pipe(retry(1),catchError(this.handleError));
  }

  //this method returns specific solar stars
  GetSolarBodyDetailById(id: any): Observable<SolarBodies>
  {
    
    const url = `${this.REST_API_SERVER}/${id}`;
    
    return this.httpClient.
    get<SolarBodies>(url)
    .pipe(retry(1),catchError(this.handleError));
  }

 // Error handling
 handleError(error: { error: { message: string; }; status: any; message: any; }) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}
}
