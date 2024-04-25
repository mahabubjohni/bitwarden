import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccpageComponent } from './createaccpage.component';

describe('CreateaccpageComponent', () => {
  let component: CreateaccpageComponent;
  let fixture: ComponentFixture<CreateaccpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
