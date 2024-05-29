import { Component, OnInit, EffectRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar', 
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  // un Objeto que contiene arreglos(defaultOptions y accessLink) para las opciones de menu principal
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  // una arreglo que contiene opciones personalizadas 
  customOptions: Array<any> = []

  constructor (
    private router: Router
  ) {}

  //se utiliza para llenar los arreglos (defaultOptions, accessLink y customOptions) con datos.
  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }
  // este metodo se utiliza pera la navegacion progrmamatica ruta (/favorites) parametros de consulta(queryParams)
  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}

/**
 * utiliza las rutas definidas en 'HomeRoutingModule' para navegar programaticamente.
 * sidebar prporcian la interface de usurio para navegar entre estas rutas. 
 */
  

