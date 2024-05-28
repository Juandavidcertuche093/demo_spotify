import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement // audio
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public payerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playPercentaje$: BehaviorSubject<number> = new BehaviorSubject(0)


  //myObservable1$: Observable<any> = new Observable
  //myObservable1$: Subject<any> = new Subject()
  //myObservable1$: BehaviorSubject<any> = new BehaviorSubject('👍👍👍👍')

  constructor() { 

    this.audio = new Audio()

    this.trackInfo$.subscribe(responseOK => {
      if (responseOK){
        console.log('🎵🎵🎵🎵', responseOK);
        this.setAudio(responseOK)
      }      
    })

    this.listenAllEvents()

   
    /*ejemplo de  BehaviorSubject
    setTimeout(() => {
      this.myObservable1$.next('👍👍👍👍')
    }, 1000)
    
    setTimeout(() => {
      this.myObservable1$.error('👎👎👎')
    }, 3500)

    /*ejemplo con Subjet
    setTimeout(() => {
      this.myObservable1$.next('👍👍👍👍')
    }, 1000)
    
    setTimeout(() => {
      this.myObservable1$.error('👎👎👎')
    }, 3500)
    */

    /*ejemplo con observable
    this.myObservable1$ = new Observable(
      (observer: Observer<any>) => {
        observer.next('👍')

        setTimeout(() => {
          observer.complete()
        }, 1000)

        setTimeout(() => {
          observer.next('👍')
        }, 2500)

        setTimeout(() => {
          observer.error('👎')
        }, 3500)
      }
    )
    */   

  }

  private listenAllEvents(): void {

    this.audio.addEventListener('timeupdate',this.calcularTime, false)
    this.audio.addEventListener('playing',this.setPlayerStatus, false)
    this.audio.addEventListener('play',this.setPlayerStatus, false)
    this.audio.addEventListener('pause',this.setPlayerStatus, false)
    this.audio.addEventListener('ended',this.setPlayerStatus, false)
  }

  private setPlayerStatus = (state: any) => {
    //console.log('😎😎😎😎', state);
    switch (state.type) { // playing
      case 'play':
        this.payerStatus$.next('play')
        break
      case 'playing':
        this.payerStatus$.next('playing')
        break
      case 'ended':
        this.payerStatus$.next('ended')
        break
      default:
        this.payerStatus$.next('paused')
        break;
    }    
  }

  private calcularTime = () => {
    //console.log('Disparamos evento')
    const { duration, currentTime } = this.audio //duration, currentTime estas propiedas son de HTMLAudioElement
    //console.log([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setRemainin(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setPercentage(currentTime: number, duration: number): void {
    //rregla de 3 (currenTime * 100 / duration)
    let percentaje = (currentTime * 10) / duration;
    this.playPercentaje$.next(percentaje)
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) // esta formula para obtener los segundosen numero entero 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60) // para obtener minutos en enteros 1,2,3

    // 00:00 ----> 01:05 -----> 10:15 esto es para colocar un 0
    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}: ${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setRemainin(currentTime: number, duration: number): void {
    let timeleft = duration - currentTime;
    let seconds = Math.floor(timeleft % 60) 
    let minutes = Math.floor((timeleft / 60) % 60)
    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}: ${displaySeconds}`
    this.timeRemaining$.next(displayFormat)

  }  

   //funciones publicas
   public setAudio(track: TrackModel): void {
    console.log('📢📢📢', track);
    this.audio.src = track.url
    this.audio.play()
   }

   public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
   }

   public seekAudio(percentaje: number): void {
    const { duration } = this.audio
    const percentajeToSecond = (percentaje * duration) / 100
    this.audio.currentTime = percentajeToSecond
   }
  
}
