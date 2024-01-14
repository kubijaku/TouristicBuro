import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WycieczkaPodgladComponent } from './wycieczka-podglad.component';

describe('WycieczkaPodgladComponent', () => {
  let component: WycieczkaPodgladComponent;
  let fixture: ComponentFixture<WycieczkaPodgladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WycieczkaPodgladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WycieczkaPodgladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
