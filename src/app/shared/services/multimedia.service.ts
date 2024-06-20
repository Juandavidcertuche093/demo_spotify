import { EventEmitter, Injectable, effect, signal } from '@angular/core';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  public audio!: HTMLAudioElement // audio  
  public trackInfoSignal = signal<TrackModel | undefined>(undefined)  
  public timeElapsedSignal = signal<string>('00:00')  
  public timeRemainingSignal = signal<string>('-00:00')  
  public payerStatusSignal = signal<string>('paused')  
  public playPercentajeSignal = signal<number>(0)

   constructor() { 

    this.audio = new Audio()

    effect(() => {
      const dataInfo = this.trackInfoSignal()      
      if(dataInfo) this.setAudio(dataInfo)
    })

    this.listenAllEvents()  
   
  }

  private listenAllEvents(): void {

    this.audio.addEventListener('timeupdate',this.calcularTime, false)
    this.audio.addEventListener('playing',this.setPlayerStatus, false)
    this.audio.addEventListener('play',this.setPlayerStatus, false)
    this.audio.addEventListener('pause',this.setPlayerStatus, false)
    this.audio.addEventListener('ended',this.setPlayerStatus, false)
  }

  // esta funcion se encarga de asignar el estado
  private setPlayerStatus = (state: any) => {
    //console.log('😎😎😎😎', state);
    switch (state.type) { // playing
      case 'play':
        this.payerStatusSignal.set('play');
        break
      case 'playing':
        this.payerStatusSignal.set('playing');
        break
      case 'ended':
        this.payerStatusSignal.set('ended');
        break
      default:
        this.payerStatusSignal.set('paused');
        break;
    }    
  }

  //esta funcion se encarga de hacer calculos matematicos
  private calcularTime = () => {
    //console.log('Disparamos evento')
    const { duration, currentTime } = this.audio //duration, currentTime estas propiedas son de HTMLAudioElement
    //console.log([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setRemainin(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  //calcula el porsentaje
  private setPercentage(currentTime: number, duration: number): void {
    //rregla de 3 (currenTime * 100 / duration)
    let percentaje = (currentTime * 10) / duration;
    this.playPercentajeSignal.set(percentaje)
  }

  //funcion que establece el tiempo
  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) // esta formula para obtener los segundosen numero entero 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60) // para obtener minutos en enteros 1,2,3

    // 00:00 ----> 01:05 -----> 10:15 esto es para colocar un 0
    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}: ${displaySeconds}`
    this.timeElapsedSignal.set(displayFormat)
  }

  // funcion del tiempo que resta el tiempo
  private setRemainin(currentTime: number, duration: number): void {
    let timeleft = duration - currentTime;
    let seconds = Math.floor(timeleft % 60) 
    let minutes = Math.floor((timeleft / 60) % 60)
    const displaySeconds = (seconds < 10 ) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}: ${displaySeconds}`
    this.timeRemainingSignal.set(displayFormat)

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
