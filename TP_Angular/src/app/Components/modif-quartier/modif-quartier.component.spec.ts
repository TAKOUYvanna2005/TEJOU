import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifQuartierComponent } from './modif-quartier.component';

describe('ModifQuartierComponent', () => {
  let component: ModifQuartierComponent;
  let fixture: ComponentFixture<ModifQuartierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifQuartierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifQuartierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
