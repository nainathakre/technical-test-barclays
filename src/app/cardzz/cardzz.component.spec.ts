import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardzzComponent } from './cardzz.component';

describe('CardzzComponent', () => {
  let component: CardzzComponent;
  let fixture: ComponentFixture<CardzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
