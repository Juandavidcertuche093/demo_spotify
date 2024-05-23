import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generica',  
  templateUrl: './section-generica.component.html',
  styleUrl: './section-generica.component.css'
})
export class SectionGenericaComponent implements OnInit {

  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<any> = []

  constructor () {}

  ngOnInit(): void {
    
  }

}
