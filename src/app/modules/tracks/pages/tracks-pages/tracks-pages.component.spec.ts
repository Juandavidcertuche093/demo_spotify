import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { TracksPagesComponent } from './tracks-pages.component';
import {TracksModule} from '../../tracks.module'

describe('TracksPagesComponent', () => {
  let component: TracksPagesComponent;
  let fixture: ComponentFixture<TracksPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule, TracksModule, TracksPagesComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(TracksPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
