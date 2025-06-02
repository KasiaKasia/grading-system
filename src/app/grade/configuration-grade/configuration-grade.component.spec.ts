import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationGradeComponent } from './configuration-grade.component';

describe('ConfigurationGradeComponent', () => {
  let component: ConfigurationGradeComponent;
  let fixture: ComponentFixture<ConfigurationGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
