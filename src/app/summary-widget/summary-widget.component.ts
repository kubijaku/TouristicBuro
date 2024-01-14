import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-widget.component.html',
  styleUrl: './summary-widget.component.css'
})
export class SummaryWidgetComponent {
  @Input() wycieczki!: any;
  @Input() numberOfreservedTrips!: any;
  
  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 50);
  }

  ngOnInit() {
    // console.log(this.wycieczki)
  }
}
