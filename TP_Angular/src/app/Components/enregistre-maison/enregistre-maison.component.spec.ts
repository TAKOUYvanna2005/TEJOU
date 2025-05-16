import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreMaisonComponent } from './enregistre-maison.component';

describe('EnregistreMaisonComponent', () => {
  let component: EnregistreMaisonComponent;
  let fixture: ComponentFixture<EnregistreMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnregistreMaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistreMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
