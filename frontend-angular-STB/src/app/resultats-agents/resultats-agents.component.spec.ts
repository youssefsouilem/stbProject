import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsAgentsComponent } from './resultats-agents.component';

describe('ResultatsAgentsComponent', () => {
  let component: ResultatsAgentsComponent;
  let fixture: ComponentFixture<ResultatsAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatsAgentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatsAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
