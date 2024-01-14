import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private trips: any;

  constructor( private http: HttpClient ) {

  }

  updateReservedPlaces(reservations: number, id: any): void {
    const body = { reserved_places: reservations };
    this.http.put<any>('http://localhost:3000/api/trips/' + id + '/reserved_places', body)
    .subscribe();

  }

  updateRate(rate: number, id: any): void {
    const body = { rate: rate };
    this.http.put<any>('http://localhost:3000/api/trips/' + id + '/rate', body)
    .subscribe();

  }

  getAllTrips(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/trips');
  }

  deleteTrip(id: any): void{
    this.http.delete<any>('http://localhost:3000/api/trips/' + id).subscribe();
  }

  getTrip(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/trips/' + id);
  }

}