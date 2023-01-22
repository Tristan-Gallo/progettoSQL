import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InghilterraComponent } from './inghilterra.component';

describe('InghilterraComponent', () => {
  let component: InghilterraComponent;
  let fixture: ComponentFixture<InghilterraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InghilterraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InghilterraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
