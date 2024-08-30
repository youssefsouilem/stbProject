import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherAgentComponent } from './chercher-agent.component';

describe('ChercherAgentComponent', () => {
  let component: ChercherAgentComponent;
  let fixture: ComponentFixture<ChercherAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChercherAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercherAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
