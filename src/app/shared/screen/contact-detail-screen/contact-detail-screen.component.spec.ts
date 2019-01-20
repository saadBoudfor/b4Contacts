import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailScreenComponent } from './contact-detail-screen.component';

describe('ContactDetailScreenComponent', () => {
  let component: ContactDetailScreenComponent;
  let fixture: ComponentFixture<ContactDetailScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
