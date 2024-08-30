import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherDepartmentParAdresseComponent } from './chercher-department-par-adresse.component';

describe('ChercherDepartmentParAdresseComponent', () => {
  let component: ChercherDepartmentParAdresseComponent;
  let fixture: ComponentFixture<ChercherDepartmentParAdresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChercherDepartmentParAdresseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherDepartmentParAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
