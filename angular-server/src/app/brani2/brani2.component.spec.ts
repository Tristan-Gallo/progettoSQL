import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brani2Component } from './brani2.component';

describe('Brani2Component', () => {
  let component: Brani2Component;
  let fixture: ComponentFixture<Brani2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Brani2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Brani2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
