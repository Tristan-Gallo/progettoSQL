import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagnaComponent } from './spagna.component';

describe('SpagnaComponent', () => {
  let component: SpagnaComponent;
  let fixture: ComponentFixture<SpagnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpagnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
