import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http401Page } from './http-401-page';

describe('Http401Page', () => {
  let component: Http401Page;
  let fixture: ComponentFixture<Http401Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Http401Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Http401Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
