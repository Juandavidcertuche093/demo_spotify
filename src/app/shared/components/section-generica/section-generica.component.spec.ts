import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SectionGenericaComponent } from './section-generica.component';

describe('SectionGenericaComponent', () => {
  let component: SectionGenericaComponent;
  let fixture: ComponentFixture<SectionGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionGenericaComponent]
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
