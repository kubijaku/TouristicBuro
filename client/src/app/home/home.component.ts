import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private elementRef: ElementRef) {}
      ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument
            .body.style.background = 'linear-gradient(135deg, #3494e6, #ec6ead); /* Adjust the gradient colors */';
    }

}
