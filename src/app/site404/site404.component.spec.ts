import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Site404Component } from './site404.component';

describe('Site404Component', () => {
  let component: Site404Component;
  let fixture: ComponentFixture<Site404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Site404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Site404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
