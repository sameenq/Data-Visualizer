import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCsvComponent } from './manage-csv.component';

describe('ManageCsvComponent', () => {
  let component: ManageCsvComponent;
  let fixture: ComponentFixture<ManageCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
