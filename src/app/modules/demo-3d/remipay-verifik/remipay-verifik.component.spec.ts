import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemipayVerifikComponent } from './remipay-verifik.component';

describe('RemipayVerifikComponent', () => {
  let component: RemipayVerifikComponent;
  let fixture: ComponentFixture<RemipayVerifikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemipayVerifikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemipayVerifikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
