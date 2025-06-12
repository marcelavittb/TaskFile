import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Início</a> |
      <a routerLink="/about">Sobre</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
