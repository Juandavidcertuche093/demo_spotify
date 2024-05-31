import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true,
})
export class ImgBrokenDirective {
  // HOST hace referencia al guesped esto nos sirve para cuando la url de una imagen no carge aparesca la imagen de error
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('💣 esta imagen revento --->', this.elHost);
    elNative.src = 'assets/img/Error.svg.png'

  }

  constructor(
    private elHost: ElementRef
  ) {  }

}
