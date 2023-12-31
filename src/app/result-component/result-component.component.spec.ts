import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponentComponent } from './result-component.component';

describe('ResultComponentComponent', () => {
  let component: ResultComponentComponent;
  let fixture: ComponentFixture<ResultComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultComponentComponent]
    });
    fixture = TestBed.createComponent(ResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
