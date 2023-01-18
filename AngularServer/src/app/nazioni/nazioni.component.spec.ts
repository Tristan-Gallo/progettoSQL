import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NazioniComponent } from './nazioni.component';

describe('NazioniComponent', () => {
  let component: NazioniComponent;
  let fixture: ComponentFixture<NazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
