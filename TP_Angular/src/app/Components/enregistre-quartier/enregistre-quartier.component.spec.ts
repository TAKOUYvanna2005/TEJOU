import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreQuartierComponent } from './enregistre-quartier.component';

describe('EnregistreQuartierComponent', () => {
  let component: EnregistreQuartierComponent;
  let fixture: ComponentFixture<EnregistreQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnregistreQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistreQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
