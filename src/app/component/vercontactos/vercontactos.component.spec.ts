import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercontactosComponent } from './vercontactos.component';

describe('VercontactosComponent', () => {
  let component: VercontactosComponent;
  let fixture: ComponentFixture<VercontactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercontactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
