import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './commons/components/header/header';
import { Footer } from './commons/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('xstore');
}
