import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannerImageComponent } from './panner-image.component';

describe('PannerImageComponent', () => {
  let component: PannerImageComponent;
  let fixture: ComponentFixture<PannerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PannerImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
