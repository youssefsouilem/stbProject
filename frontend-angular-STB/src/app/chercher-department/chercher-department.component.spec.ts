import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherDepartmentComponent } from './chercher-department.component';

describe('ChercherDepartmentComponent', () => {
  let component: ChercherDepartmentComponent;
  let fixture: ComponentFixture<ChercherDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChercherDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
