import { Component } from '@angular/core';
import { Home } from './home/home';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [Home, MatIconModule],
  template: ` <main>
    <header class="brand-name">
      <h1>{{ title }}</h1>
      <mat-icon>home</mat-icon>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrl: './app.css',
})
export class App {
  title = 'homes';
}
