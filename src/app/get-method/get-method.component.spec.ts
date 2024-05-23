import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMethodComponent } from './get-method.component';

describe('GetMethodComponent', () => {
  let component: GetMethodComponent;
  let fixture: ComponentFixture<GetMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetMethodComponent]
    });
    fixture = TestBed.createComponent(GetMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
