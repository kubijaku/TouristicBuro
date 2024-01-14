import { Component, EventEmitter, Input, Output } from '@angular/core';
import { wycieczka } from '../../assets/wycieczkaInterface';
import { CommonModule } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ServerInfoService } from '../server-info.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { ServerService } from '../server.service';
import { SummaryWidgetComponent } from '../summary-widget/summary-widget.component';


@Component({
  selector: 'app-wycieczka',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './wycieczka.component.html',
  styleUrl: './wycieczka.component.css'
})
export class WycieczkaComponent {
  @Input() wycieczka!: wycieczka;
  @Input() lowestPriceTrip!: wycieczka;
  @Input() highestPriceTrip!: wycieczka;
  @Input() currency!: string;
  @Input() id!: number;
  @Output() newItemEvent: EventEmitter<string> = new EventEmitter<string>();
  reservations: number = 0;
  price: any;
  numberOfPlaces: any;
  server : string = this.serverInfoService.getServer();


  constructor(private http: HttpClient, private db: AngularFireDatabase, private serverInfoService: ServerInfoService,
              private serverService: ServerService) { }

  ngOnInit() {    

      // console.log(this.highestPriceTrip.name)
      if (this.currency === 'PLN') {
        this.price = this.wycieczka.price;
      } else if (this.currency === 'EUR') {
        this.price = this.wycieczka.price * 4.3;
      } else {
        this.price = this.wycieczka.price;
      }
      this.reservations = this.wycieczka.reserved_places
      this.numberOfPlaces = this.wycieczka.max_number_of_places - this.reservations;

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



  delete():void {
    this.newItemEvent.emit(String(this.id));
  }
}

