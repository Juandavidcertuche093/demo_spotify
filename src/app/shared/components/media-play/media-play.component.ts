import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-play', 
  templateUrl: './media-play.component.html',
  styleUrl: './media-play.component.css'
})
export class MediaPlayComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor (
    public multimediaService: MultimediaService
  ) {}

  ngOnInit(): void {

    const observer1$ = this.multimediaService.payerStatus$
      .subscribe(status => this.state = status)

    this.listObservers$ = [observer1$]
    
    /* 
    const observable1$ = this.multimediaService.myObservable1$
    .subscribe(
      (responseOK) => {
        //next() => todo esta bn
        console.log('😎 el agua llega perfecto!', responseOK);
      },
      (responseFail) => {
        //error() => ocurre un error
        console.log('🤬 se tapoo la tuberia', responseFail);
      }
    )
    */


  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    //console.log('💣💣💣💣 BOOOM!')
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x // 1050 menos x
    const percentajeFromX = (clickX * 100) / width
    //console.log(`click(x) ${percentajeFromX}`);
    this.multimediaService.seekAudio(percentajeFromX)
  }

}
