import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSetupComponent } from './routing-setup.component';

describe('RoutingSetupComponent', () => {
  let component: RoutingSetupComponent;
  let fixture: ComponentFixture<RoutingSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
