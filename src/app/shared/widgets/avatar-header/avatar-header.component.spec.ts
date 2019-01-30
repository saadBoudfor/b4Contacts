import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarHeaderComponent } from './avatar-header.component';

describe('AvatarHeaderComponent', () => {
  let component: AvatarHeaderComponent;
  let fixture: ComponentFixture<AvatarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
