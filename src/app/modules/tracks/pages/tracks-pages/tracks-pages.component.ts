import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-pages',  
  templateUrl: './tracks-pages.component.html',
  styleUrl: './tracks-pages.component.css'
})
export class TracksPagesComponent implements OnInit {

  mockTracksList = [
    {
      name: 'BEBE (oficial)'
    },
    {
      name: 'BEBE (oficial)'
    },
    {
      name: 'BEBE (oficial)'
    },
  ]

  constructor () {}

  ngOnInit(): void {
    
  }

}
