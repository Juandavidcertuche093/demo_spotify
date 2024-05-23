import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json' //es para todo lo que esta en el .traks.json este en (data)
import { TrackModel } from '../../../../core/models/tracks.model';

@Component({
  selector: 'app-tracks-pages',  
  templateUrl: './tracks-pages.component.html',
  styleUrl: './tracks-pages.component.css'
})
export class TracksPagesComponent implements OnInit {

  mockTracksList: Array<TrackModel> = []

  
  constructor () {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockTracksList = data   
  }

}
