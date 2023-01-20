import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraniComponent } from './brani.component';

describe('BraniComponent', () => {
  let component: BraniComponent;
  let fixture: ComponentFixture<BraniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
