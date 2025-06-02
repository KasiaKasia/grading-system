import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewGradeComponent } from './preview-grade.component';

describe('PreviewGradeComponent', () => {
  let component: PreviewGradeComponent;
  let fixture: ComponentFixture<PreviewGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewGradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
