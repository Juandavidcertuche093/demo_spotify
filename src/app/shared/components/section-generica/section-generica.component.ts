import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';

@Component({
  selector: 'app-section-generica',  
  templateUrl: './section-generica.component.html',
  styleUrl: './section-generica.component.css'
})
export class SectionGenericaComponent implements OnInit {

  //Decorador que indica que  pueden ser pasadas al componente desde su contenedor.  
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

  constructor () {}

  ngOnInit(): void {
    
  }

}
