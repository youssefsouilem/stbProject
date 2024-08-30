import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsDepartmentComponent } from './resultats-department.component';

describe('ResultatsDepartmentComponent', () => {
  let component: ResultatsDepartmentComponent;
  let fixture: ComponentFixture<ResultatsDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatsDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
