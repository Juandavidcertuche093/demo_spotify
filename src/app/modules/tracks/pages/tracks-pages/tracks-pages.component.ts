import { Component, OnInit } from '@angular/core';
import * as data from '../../../../data/tracks.json' //es para todo lo que esta en el .traks.json este en (data)

@Component({
  selector: 'app-tracks-pages',  
  templateUrl: './tracks-pages.component.html',
  styleUrl: './tracks-pages.component.css'
})
export class TracksPagesComponent implements OnInit {

  mockTracksList = [
  
  ]

  constructor () {}

  ngOnInit(): void {
    console.log(data)
  }

}
