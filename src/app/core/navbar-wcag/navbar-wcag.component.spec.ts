import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWcagComponent } from './navbar-wcag.component';

describe('NavbarWcagComponent', () => {
  let component: NavbarWcagComponent;
  let fixture: ComponentFixture<NavbarWcagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarWcagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarWcagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
