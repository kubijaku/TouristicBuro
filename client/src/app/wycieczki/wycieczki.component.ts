import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
import { WycieczkaComponent } from '../wycieczka/wycieczka.component';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { SummaryWidgetComponent } from '../summary-widget/summary-widget.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
import { ServerInfoService } from '../server-info.service';
import { ServerService } from '../server.service';




@Component({
  selector: 'app-wycieczki',
  standalone: true,
  imports: [HttpClientModule, CommonModule, WycieczkaComponent, SummaryWidgetComponent, NgxPaginationModule, FormsModule],
  templateUrl: './wycieczki.component.html',
  styleUrl: './wycieczki.component.css'
})
export class WycieczkiComponent {
  wycieczki: any;
  lowestPriceTrip: any;
  highestPriceTrip: any;
  currency: any = 'PLN';
  page: number = 1;
  itemsPerPage = 4;
  numberOfreservedTrips: number = 0;


  
  constructor(private http: HttpClient, private db: AngularFireDatabase, private serverInfoService: ServerInfoService,
              public serverService: ServerService) { 
  }


  getItemsWithId(path: string): Observable<any[]> {
    return this.db.list(path)
    .snapshotChanges()
    .pipe(map(items => {             // <== new way of chaining
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, data};           // or {key, ...data} in case data is Obj
      });
    }));
  }

  ngOnInit() {   
    console.log(this.serverInfoService.getServer());
    if ( this.serverInfoService.getServer() == 'local'){
      this.serverService.getAllTrips().subscribe( data => {
      console.log(data);
      this.wycieczki = data;
      if (typeof this.wycieczki !== "undefined") {

        this.lowestPriceTrip = this.findTripWithLowestPrice(this.wycieczki);
        this.highestPriceTrip = this.findTripWithHighestPrice(this.wycieczki);
        this.getNumberOfReservedTrips();
        }
      });
    }

    if ( this.serverInfoService.getServer() == 'firebase'){
        this.getItemsWithId('trips').subscribe((data) => {
        this.wycieczki = data;
        if (typeof this.wycieczki !== "undefined") {

          this.lowestPriceTrip = this.findTripWithLowestPrice(this.wycieczki);
          this.highestPriceTrip = this.findTripWithHighestPrice(this.wycieczki);
          this.getNumberOfReservedTrips();
        }
      });
    }
  }



  private findTripWithLowestPrice(wycieczki: any[]): any {
    if (typeof wycieczki !== "undefined") {
      this.lowestPriceTrip = wycieczki[0].data;
      for (let i = 1; i < wycieczki.length; i++) {
        // If the current trip has a lower price, update lowestPriceTrip
        if (wycieczki[i].data.price > this.lowestPriceTrip.price) {
          this.lowestPriceTrip = wycieczki[i].data;
        }
      }
    }
    return this.lowestPriceTrip;
  }

  private findTripWithHighestPrice(wycieczki: any[]): any {
    if ( typeof this.wycieczki !== "undefined" ) {
      this.highestPriceTrip = wycieczki[0].data;
      for (let i = 1; i < wycieczki.length; i++) {
        // If the current trip has a lower price, update lowestPriceTrip
        if (wycieczki[i].data.price < this.highestPriceTrip.price) {
          this.highestPriceTrip = wycieczki[i].data;
        }
      }
    }
    return this.highestPriceTrip;
  }

  getNumberOfReservedTrips() {
    this.numberOfreservedTrips = 0;
    this.wycieczki.forEach((element: any) => {
      if ( element.data.reserved_places > 0){
        this.numberOfreservedTrips+=1;
      }
    });
    // console.log(this.numberOfreservedTrips)
  }

  onNotifyClicked(message: string):void {
    console.log(message);
    if ( this.serverInfoService.getServer() == 'local'){
      this.serverService.deleteTrip(message);
      this.ngOnInit();
    }

    if ( this.serverInfoService.getServer() == 'firebase'){
      const itemsRef = this.db.list('trips');
      itemsRef.remove(message);
    }
  }
}
