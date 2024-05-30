import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HistoryPagesComponent } from './history-pages.component';
import {HistoryModule} from '../../history.module'


describe('HistoryPagesComponent', () => {
  let component: HistoryPagesComponent;
  let fixture: ComponentFixture<HistoryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, HistoryModule],
      declarations: [HistoryPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
