import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsChildComponent } from './flags-child.component';

describe('FlagsChildComponent', () => {
  let component: FlagsChildComponent;
  let fixture: ComponentFixture<FlagsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
