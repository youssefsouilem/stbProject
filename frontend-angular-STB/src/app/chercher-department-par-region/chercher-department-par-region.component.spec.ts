import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherDepartmentParRegionComponent } from './chercher-department-par-region.component';

describe('ChercherDepartmentParRegionComponent', () => {
  let component: ChercherDepartmentParRegionComponent;
  let fixture: ComponentFixture<ChercherDepartmentParRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChercherDepartmentParRegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherDepartmentParRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
