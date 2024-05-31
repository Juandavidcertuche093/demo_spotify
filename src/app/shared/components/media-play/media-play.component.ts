import { Component, DestroyRef, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TrackModel } from '../../../core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription, pipe } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { destroyCustome } from '../../../core/utils/destroyCustome';

@Component({
    selector: 'app-media-play',
    templateUrl: './media-play.component.html',
    styleUrl: './media-play.component.css',
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayComponent implements OnInit {

  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')  
  state: string = 'paused'

  multimediaService = inject(MultimediaService)
  destroyCustom = destroyCustome()
   

  ngOnInit(): void {
    this.multimediaService.payerStatus$
    .pipe(this.destroyCustom())
      .subscribe(
        (status) => (this.state = status)
      )    
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
