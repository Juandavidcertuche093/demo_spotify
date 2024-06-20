import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { FavoritePagesComponent } from './favorite-pages.component';
import {FavoritesModule} from './../../favorites.module'

describe('FavoritePagesComponent', () => {
  let component: FavoritePagesComponent;
  let fixture: ComponentFixture<FavoritePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, FormsModule, FavoritesModule, FavoritePagesComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
