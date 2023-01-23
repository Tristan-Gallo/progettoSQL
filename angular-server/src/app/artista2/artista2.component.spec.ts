import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artista2Component } from './artista2.component';

describe('Artista2Component', () => {
  let component: Artista2Component;
  let fixture: ComponentFixture<Artista2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artista2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
