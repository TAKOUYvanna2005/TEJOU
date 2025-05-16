import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeQuartierComponent } from './liste-quartier.component';

describe('ListeQuartierComponent', () => {
  let component: ListeQuartierComponent;
  let fixture: ComponentFixture<ListeQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
