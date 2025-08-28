import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadPage } from './bad-page';

describe('BadPage', () => {
  let component: BadPage;
  let fixture: ComponentFixture<BadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
