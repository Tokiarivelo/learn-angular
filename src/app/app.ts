import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatIconModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'homes';
}
