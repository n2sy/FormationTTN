import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteComponent } from './visite.component';

describe('VisiteComponent', () => {
  let component: VisiteComponent;
  let fixture: ComponentFixture<VisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
