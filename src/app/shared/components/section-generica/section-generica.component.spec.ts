import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGenericaComponent } from './section-generica.component';

describe('SectionGenericaComponent', () => {
  let component: SectionGenericaComponent;
  let fixture: ComponentFixture<SectionGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGenericaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
