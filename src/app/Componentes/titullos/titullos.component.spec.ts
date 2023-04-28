import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitullosComponent } from './titullos.component';

describe('TitullosComponent', () => {
  let component: TitullosComponent;
  let fixture: ComponentFixture<TitullosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitullosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitullosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
