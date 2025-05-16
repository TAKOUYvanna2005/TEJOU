import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMaisonComponent } from './modif-maison.component';

describe('ModifMaisonComponent', () => {
  let component: ModifMaisonComponent;
  let fixture: ComponentFixture<ModifMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifMaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
