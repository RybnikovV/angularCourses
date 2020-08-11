import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenServiceComponentComponent } from './children-service-component.component';

describe('ChildrenServiceComponentComponent', () => {
  let component: ChildrenServiceComponentComponent;
  let fixture: ComponentFixture<ChildrenServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
