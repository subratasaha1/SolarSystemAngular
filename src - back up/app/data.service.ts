import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable,retry,throwError } from 'rxjs'
import { map } from 'rxjs/operators';
import { Response,Options, SolarBodies } from './interface';

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
  /*GetAllSolarBodies(options: Options): Observable<SolarBodies>
  {
    const url = `${this.REST_API_SERVER}?order=${options.orderBy},${options.orderDir}&page=${options.page},${options.size}`;

    //https://api.le-systeme-solaire.net/rest.php/bodies?order=id,desc&page=2,5
    
    var d = this.httpClient.get<SolarBodies>(url)
    .pipe(retry(1),catchError(this.handleError));
    console.log("The rest api response is "+d);
    return d;
  }*/

  GetAllSolarBodies(): Observable<SolarBodies>
  {
    //console.table(this.httpClient.get<SolarBody>(this.REST_API_SERVER + '/bodies/lune/'));
    return this.httpClient.
    get<SolarBodies>(this.REST_API_SERVER + '/bodies/')
    .pipe(retry(1),catchError(this.handleError));
  }

 // Error handling
 handleError(error: { error: { message: string; }; status: any; message: any; }) {
  //console.log("1234")
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
