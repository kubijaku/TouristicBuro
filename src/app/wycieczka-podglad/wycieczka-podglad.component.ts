import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { right } from '@popperjs/core';
import { getDatabase, ref, child, push, update } from "firebase/database";
import { ServerInfoService } from '../server-info.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-wycieczka-podglad',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgbRatingModule],
  templateUrl: './wycieczka-podglad.component.html',
  styleUrl: './wycieczka-podglad.component.css',
})

export class WycieczkaPodgladComponent {

  currency: any = 'PLN';
  wycieczka: any;
  messages: AngularFireList<any> | undefined;
  price: any;
  numberOfPlaces: any;
  selected = 0;
	hovered = 0;
	readonly = false;
  id = this.route.snapshot.paramMap.get('id');
  reservations: number = 0;
  server : string = this.serverInfoService.getServer();

  constructor( private db: AngularFireDatabase, private route: ActivatedRoute,
      config: NgbRatingConfig, 
      private http: HttpClient,
      private serverInfoService: ServerInfoService,
      private serverService: ServerService) {
    config.max = 5;
	  config.readonly = false;
  }

  ngOnInit() {
    // console.log(this.serverInfoService.getServer());
    if ( this.serverInfoService.getServer() == 'local'){
      this.serverService.getTrip(this.id).subscribe( res => {
      // console.log(res);
      this.wycieczka = res.data;
      if (typeof this.wycieczka !== "undefined") {
        if (this.currency === 'PLN') {
          this.price = this.wycieczka.price;
        } else if (this.currency === 'EUR') {
          this.price = this.wycieczka.price * 4.3;
        } else {
          this.price = this.wycieczka.price;
        }
        this.reservations = this.wycieczka.reserved_places
        this.selected = this.wycieczka.rate;
        this.numberOfPlaces = this.wycieczka.max_number_of_places - this.reservations;
        }
      });
    }

    if ( this.serverInfoService.getServer() == 'firebase'){
      this.getTrips().subscribe((data) => {
        // console.log(data);
        if(this.id) {
          this.wycieczka = data[this.id];
          // console.log(this.wycieczka)
  
          if (this.currency === 'PLN') {
            this.price = this.wycieczka.price;
          } else if (this.currency === 'EUR') {
            this.price = this.wycieczka.price * 4.3;
          } else {
            this.price = this.wycieczka.price;
          }
          this.reservations = this.wycieczka.reserved_places
          this.selected = this.wycieczka.rate;
          this.numberOfPlaces = this.wycieczka.max_number_of_places - this.reservations;
        }
      });
    }
  }

  getTrips(): Observable<any> {
    this.messages = this.db.list('trips');
    // console.log(this.messages.valueChanges())
    return this.messages.valueChanges();
  }

  bookTrip() {
    if(this.numberOfPlaces > 0)
    {
      this.numberOfPlaces -= 1;
      this.wycieczka.reserved_places +=1;
      this.reservations +=1 ;
      if ( this.serverInfoService.getServer() == 'local'){
        this.serverService.updateReservedPlaces(this.reservations, this.id);
      }

      if ( this.serverInfoService.getServer() == 'firebase'){
        // console.log(this.reservations)
        const itemsRef = this.db.list('trips');
  
        // to get a key, check the Example app below
        itemsRef.update( String(this.id) , { reserved_places: this.reservations });
      }
    } else {
      alert("Brak moliwości rezerwacji wycieczki - liczba miejsc wynosi 0.");
    }
  }

  unBookTrip() {
    if(this.numberOfPlaces < this.wycieczka.max_number_of_places)
    {
      this.numberOfPlaces += 1 ;
      this.wycieczka.reserved_places -=1;
      this.reservations -=1 ;
      if ( this.serverInfoService.getServer() == 'local'){
        this.serverService.updateReservedPlaces(this.reservations, this.id)
      }

      if ( this.serverInfoService.getServer() == 'firebase'){
        // console.log(this.reservations)
        const itemsRef = this.db.list('trips');
  
        // to get a key, check the Example app below
        itemsRef.update( String(this.id) , { reserved_places: this.reservations });
      }
    } else {
      alert("Brak moliwości zwrotu wycieczki - wycieczka ma dostępną maksymalną ilość miejsc.");
    }
  }

  

  public setPLN(): any {
    this.currency = 'PLN'
    this.price = this.wycieczka.price;
  }

  public setEuro(): any {
    this.currency = 'EUR'
    this.price = this.wycieczka.price / 4.3;
  }

  public changeRate(): any {
    if ( this.id ) {
      if ( this.serverInfoService.getServer() == 'local'){
        this.serverService.updateRate(this.hovered, this.id);
      }

      if ( this.serverInfoService.getServer() == 'firebase'){
        const itemsRef = this.db.list('trips');
        // to get a key, check the Example app below
        itemsRef.update(this.id, { rate: this.hovered });
      }
    }
  }


}
