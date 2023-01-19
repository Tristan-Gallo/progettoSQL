import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercabandieraComponent } from './ricercabandiera.component';

describe('RicercabandieraComponent', () => {
  let component: RicercabandieraComponent;
  let fixture: ComponentFixture<RicercabandieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicercabandieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercabandieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
